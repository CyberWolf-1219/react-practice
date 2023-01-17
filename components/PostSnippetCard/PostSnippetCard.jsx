import classes from "./PostSnippetCard.module.css"
import Link from "next/link"


function PostSnippetCard({ postID, author, title, date = "No Idea!", content }) {


    return (
        <div className={classes.layout}>
            <div className={classes.header}>
                <div className={classes.left}>
                    <img className={classes.pic} src={`https://avatars.dicebear.com/api/micah/${author}.svg`} width={50} height={50} alt="avatar" />
                </div>
                <div className={classes.right}>
                    <h3 className={classes.title}>{title}</h3>
                    <small className={classes.date}>{`Author: ${author} / Date: ${date}`}</small>
                </div>
            </div>
            <p className={classes.snippet}>{content}</p>
            <span className={classes.read_more}>
                <Link href={`/posts/${postID}`}>Read More</Link>
            </span>
        </div>
    )
}

export default PostSnippetCard;