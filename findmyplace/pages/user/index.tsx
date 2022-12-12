import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import BookmarksPanel from "../../components/BookmarksPanel";
import Navigation from "../../components/Navigation";
import NavigationBtn from "../../components/NavigationBtn";
import PropertyAddForm from "../../components/PropertyAddForm";
import { AuthContext } from "../../contexts/AuthContext";
import { Session } from "next-auth";

function UserProfilePage({ session }: { session: Session }) {
  const authContext = useContext(AuthContext);
  const [navVisible, setNavVisible] = useState<Boolean>(false);

  function invertNavState() {
    setNavVisible((prevState: Boolean) => !prevState);
  }

  return (
    <main>
      <NavigationBtn setVisibility={invertNavState} />
      <Navigation visible={navVisible} setVisibility={invertNavState} />
      {session!.user!.type == "1" ? (
        <BookmarksPanel userID={session.user!.id} />
      ) : (
        <PropertyAddForm />
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
