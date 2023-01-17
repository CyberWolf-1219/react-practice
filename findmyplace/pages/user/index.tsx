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
    <main className="w-full max-w-screen-lg mx-auto p-2 flex flex-col items-center bg-slate-100 shadow-md shadow-slate-500">
      <NavigationBtn setVisibility={invertNavState} />
      <Navigation
        visible={navVisible}
        setVisibility={invertNavState}
        classList="fixed top-[50%] -translate-y-[50%] w-[80vw] h-[80vh] flex flex-col items-center justify-center gap-8 z-10 bg-white border-[2px] rounded-md shadow-md shadow-slate-400 transition-transform ease-in-out lg:fixed lg:top-12 lg:translate-x-0 lg:w-fit lg:w-fit lg:h-fit lg:p-2 lg:mx-auto lg:flex-row lg:justify-center lg:gap-8 felx-nowrap lg:rounded-full lg:shadow-md lg:shadow-slate-400"
        linkClassList="lg:flex-row lg:gap-8 "
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
