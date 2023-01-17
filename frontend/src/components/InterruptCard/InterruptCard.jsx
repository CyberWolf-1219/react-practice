import "./InterruptCard.css"
import { InterruptHeader, ChatBubble } from "./../";

const InterruptCard = ({ senderName, msgContent }) => {
    return (
        <div className="interrupt_card">
            <InterruptHeader senderName={senderName} />
            <ChatBubble msgContent={msgContent} />
        </div>
    )
}

export default InterruptCard;