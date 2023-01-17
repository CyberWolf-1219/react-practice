import "./ChatViewer.css"
import React, { useContext, useEffect, useRef } from "react"
import { UserInputPanel, InterruptCard } from "./.."
import { ChatContext } from "../../context/chat/chat-context"

const ChatViewer = () => {
    const chatContext = useContext(ChatContext);
    const scrollElement = useRef();

    useEffect(() => {
        scrollElement.current.scrollIntoView({ behaviour: "smooth" })
    }, [ chatContext.msgs ])

    return (
        <div className="ChatViewer">
            <div className="slider_container">
                <div className="slider">
                    {
                        chatContext.msgs.map((msgObj, index) => {
                            return <InterruptCard
                                key={index}
                                senderName={msgObj.sender}
                                msgContent={msgObj.content} />
                        })
                    }
                    <div ref={scrollElement}></div>
                </div>
            </div>
            <UserInputPanel />
        </div>
    )
}

export default ChatViewer;