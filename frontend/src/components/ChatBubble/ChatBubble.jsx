import "./ChatBubble.css"

const ChatBubble = ({ msgContent }) => {
    return (
        <div className="chat_bubble">
            {msgContent}
        </div>
    )
}

export default ChatBubble;