import Head from "next/head";
import { PostSnippetContainerCard, Layout, Navigation } from "../components";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
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
        <PostSnippetContainerCard location={"feed"} />
      </Layout>
    </>
  );
}
