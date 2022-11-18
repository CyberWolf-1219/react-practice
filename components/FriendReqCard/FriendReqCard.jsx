import classes from "./FriendReqCard.module.css"
import { useContext, useRef } from "react"
import { DBContext } from "../../contexts/db-context/db-context";

function FriendReqCard({ reqID, senderID, senderName, senderMessage }) {
    const thisCard = useRef();
    const dbContext = useContext(DBContext);

    function onClick(e) {
        const action = e.target.name;
        if (action == 'yes') {
            (async () => {
                const addFriendRes = await dbContext.addFriend(senderID);
                const removeFriendReqRes = await dbContext.removeFriendReq(reqID);
                thisCard.current.style.display = "none";
            })();
        } else {
            (async () => {
                const removeFriendReqRes = await dbContext.removeFriendReq(reqID);
                thisCard.current.style.display = "none";
            })
        }
    }

    return (
        <div ref={thisCard} className={`${classes.container} card`}>
            <div className={classes.left}>
                <img src={`https://avatars.dicebear.com/api/micah/${senderName}.svg`} alt="avatar" />
            </div>
            <div className={classes.right}>
                <div className={classes.sender_msg}>{senderMessage}</div>
                <div className={classes.btn_container}>
                    <button name="yes" onClick={onClick}>YEAH</button>
                    <button name="no" onClick={onClick}>SORRY</button>
                </div>

            </div>
        </div>
    )
}

export default FriendReqCard;