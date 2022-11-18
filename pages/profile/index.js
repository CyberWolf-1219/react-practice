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

function ProfilePage() {
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
            <ProfileBadgeCard
              userName={sessionStorage.userName}
              userBio={sessionStorage.userBio}
            />
          </div>
          <div className={classes.settings_container}>
            <ProfileSettingsCard />
          </div>
          <div className={classes.friend_list_container}>
            <FriendsListCard />
          </div>
          <div className={classes.post_snippet_container}>
            <PostSnippetContainerCard location={"user_profile"} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ProfilePage;
