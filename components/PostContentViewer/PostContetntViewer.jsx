import classes from "./PostContentViewer.module.css"

function PostContentViewer({ postContent }) {

    return <article className={`${classes.layout} card`}>{postContent}</article>
}

export default PostContentViewer;