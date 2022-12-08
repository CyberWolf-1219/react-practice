import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import React, { useContext, useState } from "react";
import BookMarksPanel from "../../components/BookMarksPanel";
import Navigation from "../../components/Navigation";
import NavigationBtn from "../../components/NavigationBtn";
import PropertyAddForm from "../../components/PropertyAddForm";
import { AuthContext } from "../../contexts/AuthContext";

function UserProfilePage() {
  const authContext = useContext(AuthContext);
  const [navVisible, setNavVisible] = useState<Boolean>(false);

  function invertNavState() {
    setNavVisible((prevState: Boolean) => !prevState);
  }

  return (
    <main>
      <NavigationBtn setVisibility={invertNavState} />
      <Navigation visible={navVisible} setVisibility={invertNavState} />
      {authContext!.data!.user!.type == "1" ? (
        <BookMarksPanel />
      ) : (
        <PropertyAddForm />
      )}
    </main>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
