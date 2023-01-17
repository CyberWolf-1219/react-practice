import "./UserAvatar.css"

const UserAvatar = ({ userName }) => {
    return (
        <div className="user_avatar">
            <img src={`https://avatars.dicebear.com/api/micah/${userName}.svg?mood[]=happy&background=%23ffffff`} alt="" />
        </div>
    )
}

export default UserAvatar;