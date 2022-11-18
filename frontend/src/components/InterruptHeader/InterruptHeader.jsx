import "./InterruptHeader.css"
import { UserAvatar } from "./.."

const InterruptHeader = ({ senderName }) => {
    return (
        <div className="interrupt_header">
            <UserAvatar userName={senderName} />
            <span className="user_name">{senderName}</span>
        </div>
    )
}

export default InterruptHeader;