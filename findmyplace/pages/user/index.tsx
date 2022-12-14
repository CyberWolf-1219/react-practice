import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import BookmarksPanel from "../../components/BookmarksPanel";
import Navigation from "../../components/Navigation";
import NavigationBtn from "../../components/NavigationBtn";
import PropertyAddForm from "../../components/PropertyAddForm";
import { AuthContext } from "../../contexts/AuthContext";
import { Session } from "next-auth";
import ListingViewer from "../../components/ListingViewer";

function UserProfilePage({ session }: { session: Session }) {
  const authContext = useContext(AuthContext);
  const [navVisible, setNavVisible] = useState<Boolean>(false);

  function invertNavState() {
    setNavVisible((prevState: Boolean) => !prevState);
  }

  return (
    <main className="relative w-full max-w-screen-lg mx-auto p-2 flex flex-col items-center bg-slate-100 shadow-md shadow-slate-500">
      <NavigationBtn setVisibility={invertNavState} />
      <Navigation
        visible={navVisible}
        setVisibility={invertNavState}
        classList="md:fixed md:top-4 md:translate-x-0 md:w-fit md:h-fit md:p-2 md:mx-auto md:flex-row md:justify-center md:gap-8 md:rounded-full md:shadow-md md:shadow-slate-400"
        linkClassList="md:flex-row md:gap-8 md:w-fit"
      />
      {session!.user!.type == "scouter" ? (
        <BookmarksPanel userID={session.user!.id} />
      ) : (
        <>
          <ListingViewer userID={session.user!.id} />
          <PropertyAddForm
            userID={session.user!.id}
            userSubType={session.user!.subType}
          />
        </>
      )}
    </main>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });
  console.log(`USER INDEX SESSION: `, session);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: { session },
    };
  }
}
