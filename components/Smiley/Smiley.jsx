import { useRef, useState, useEffect, useContext } from "react";
import { DBContext } from "../../contexts/db-context/db-context";
import FriendReqCard from "../FriendReqCard/FriendReqCard";
import classes from "./Smiley.module.css"

function Smiley() {
    const notificationPanel = useRef()

    const dbContext = useContext(DBContext)
    const [ friendReqs, setFriendReqs ] = useState([]);

    function onClickHandler() {
        (async () => {
            const friendReqs = await dbContext.getFriendReqs();
            setFriendReqs(friendReqs)
        })();

        notificationPanel.current.classList.toggle(classes.visible)
    }

    return (
        <div className={classes.smiley_container}>

            <div className={classes.smiley} onClick={onClickHandler}>
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.gif" alt="🙂" width="32" height="32" />
            </div>
            <div ref={notificationPanel} className={classes.notification_container}>
                {
                    friendReqs.map((friendReq, index) => {
                        return <FriendReqCard key={index} reqID={friendReq.id} senderID={friendReq.sender_id} senderName={friendReq.sender_name} senderMessage={friendReq.sender_msg} />
                    })
                }
            </div>
        </div>
    );
}

export default Smiley;