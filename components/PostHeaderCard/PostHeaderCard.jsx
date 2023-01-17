import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DBContext } from "../../contexts/db-context/db-context";
import classes from "./PostHeader.module.css"


function PostHeaderCard({ title, author, authorID, date }) {
    const router = useRouter()
    const dbContext = useContext(DBContext)
    const [ viableUser, setViableUser ] = useState(true)

    useEffect(() => {
        const notTheAuthor = authorID !== sessionStorage.userID
        const notAFriend = !sessionStorage.friendIDs.includes(authorID)
        setViableUser(notTheAuthor && notAFriend)
    })

    function buttonClickHandler(e) {
        e.preventDefault();

        if (e.target.name == "view_profile") {
            router.push(`/profile/${authorID}`);
        } else if (e.target.name == "add_friend") {
            dbContext.sendFriendReq(authorID, prompt("🙂: Say Something?"))
        }
    }

    const button = (<><button onClick={buttonClickHandler} name="view_profile" >Look What's The Stranger is Upto</button>
        <button onClick={buttonClickHandler} name="add_friend" >Ask Wanna Be Friends</button></>)

    return (
        <div className={`${classes.layout} card`}>
            <div className={classes.top}>
                {viableUser ? button : <></>}
            </div>
            <div className={classes.bottom}>
                <div className={classes.left}>
                    <img className={classes.pic} src={`https://avatars.dicebear.com/api/micah/${author}.svg`} width={50} height={50} alt="avatar" />
                </div>
                <div className={classes.right}>
                    <h3 className={classes.title}>{title}</h3>
                    <small className={classes.date}>{`Author: ${author} / Date: ${date}`}</small>
                </div>
            </div>
        </div>
    );
}


export default PostHeaderCard;