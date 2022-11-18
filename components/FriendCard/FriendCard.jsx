import classes from "./FriendCard.module.css"

function FriendCard({ friendName }) {
    return (
        <div className={classes.layout}>
            <img className={classes.friend_pic} src={`https://avatars.dicebear.com/api/micah/${friendName}.svg`} alt="friend profile pic" />
            <b className={classes.friend_name}>{friendName}</b>
        </div>)
}

export default FriendCard;