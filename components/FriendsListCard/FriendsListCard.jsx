import classes from "./FriendsListCard.module.css"
import { FriendCard } from './..'
import { useContext, useEffect, useState } from "react";
import { DBContext } from "../../contexts/db-context/db-context";

function FriendsListCard() {
    const dbContext = useContext(DBContext);
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        if (window) {
            (async () => {
                const response = await dbContext.getFriendIdList()
                const friendsListPromises = await response.map(async (friendID) => {
                    const friendDetails = await dbContext.getFriendDetails(friendID);
                    return friendDetails
                })
                Promise.all(friendsListPromises).then((result) => {
                    setFriends(result)
                })
            })();
        }

    }, [])

    return (
        <div className={`${classes.layout} card container`}>
            {
                friends.map((friendObj, index) => {
                    return <FriendCard key={index} friendName={friendObj.user_name} />
                })
            }
        </div>
    )
}

export default FriendsListCard;