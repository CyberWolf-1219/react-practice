import {
  ProfileBadgeCard,
  ProfileSettingsCard,
  FriendsListCard,
  PostSnippetContainerCard,
  Layout,
  Navigation,
} from "../../components";
import classes from "./profile.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function ProfilePage({ user_id, user_name, user_bio }) {
  const router = useRouter();

  useEffect(() => {
    if (window) {
      if (!sessionStorage.loggedIn) {
        router.replace("/auth");
      }
    }
  }, []);

  return (
    <>
      <Navigation />
      <Layout width={60}>
        <div className={classes.layout}>
          <div className={classes.badge_container}>
            <ProfileBadgeCard userName={user_name} userBio={user_bio} />
          </div>
          {/* <div className={classes.friend_list_container}>
          <FriendsListCard />
        </div> */}
          <div className={classes.post_snippet_container}>
            <PostSnippetContainerCard
              location={"stranger_profile"}
              strangerID={user_id}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProfilePage;

export async function getServerSideProps(context) {
  const userID = context.params.userID;

  const response = await fetch(`http://localhost:4000/users?id=${userID}`);
  const jsonResData = await response.json();
  console.log(jsonResData);

  return {
    props: {
      user_id: jsonResData[0].id,
      user_name: jsonResData[0].user_name,
      user_bio:
        jsonResData[0].user_bio || "Why are you looking at my notes? 🙂",
    },
  };
}
