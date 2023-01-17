import "./UserCard.css"
import { UserAvatar } from "./../index"

const UserCard = ({ userName }) => {
    return (
        <div className="user_card">
            <UserAvatar userName={userName} />
            <span className="user_name">
                {userName}
            </span>
        </div>
    )
}

export default UserCard;