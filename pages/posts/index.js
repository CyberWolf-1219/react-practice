import { NewPostForm, Layout, Navigation } from "../../components";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NewPost() {
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
      <Layout width={70}>
        <NewPostForm />
      </Layout>
    </>
  );
}

export default NewPost;
