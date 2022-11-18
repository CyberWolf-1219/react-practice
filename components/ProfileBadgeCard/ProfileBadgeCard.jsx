import classes from "./ProfileBadgeCard.module.css"

function ProfileBadgeCard({ userName, userBio }) {
    return (
        <div className={`${classes.layout} card`}>
            <img className={classes.profile_pic} src={`https://avatars.dicebear.com/api/micah/${userName}.svg`} alt="" width={100} height={100} />

            <b className={classes.user_name} >{userName}</b>

            <p className={classes.bio} >{userBio}</p>

        </div>
    )
}

export default ProfileBadgeCard;