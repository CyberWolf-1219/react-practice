import classes from "./PostPage.module.css";
import { MdDeleteOutline } from "react-icons/md";
import {
  PostHeaderCard,
  PostContentViewer,
  Layout,
  Navigation,
} from "./../../components";
import { IconContext } from "react-icons/lib";
import { useEffect, useState, useContext } from "react";
import { PreparePostContent } from "./../../helpers/post-page-helpers";
import { DBContext } from "./../../contexts/db-context/db-context";
import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const dbcontext = useContext(DBContext);
  const [deletable, setDeletable] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    // LOGIN CHECK && POST OWNER CHECK
    if (window) {
      if (!sessionStorage.loggedIn) {
        router.replace("/auth");
      } else if (sessionStorage.userID == post.author_id) {
        setDeletable(true);
      }
    }

    // REQUEST POST IF POST IS AN EMPTY OBJ
    (async () => {
      if (Object.keys(post).length == 0) {
        const response = await dbcontext.getPost(router.query.postID);
        setPost(response);
      }
    })();
  });

  function deletePost(postID) {
    dbcontext.deletePost(postID);
    router.replace("/");
  }

  const BUTTON = (
    <button
      className={classes.edit_btn}
      onClick={() => {
        deletePost(post.id);
      }}
    >
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <MdDeleteOutline />
      </IconContext.Provider>
    </button>
  );

  return (
    <>
      <Navigation />
      <Layout width={60}>
        <div className={classes.layout}>
          <PostHeaderCard
            authorID={post.author_id}
            author={post.author_name}
            title={post.post_title}
            date={post.timestamp}
          />

          <PostContentViewer
            postContent={PreparePostContent(post.post_content)}
          />
        </div>
        {deletable ? BUTTON : <></>}
      </Layout>
    </>
  );
}

export default PostPage;
