import "./UserInputPanel.css";
import React, { useContext, useRef } from 'react';
import { ChatContext } from "../../context/chat/chat-context";

const UserInputPanel = () => {
    const chatContext = useContext(ChatContext);
    const userTextInput = useRef();

    function onSend() {
        const text = userTextInput.current.value;
        chatContext.send(text);
        userTextInput.current.value = '';
    }

    return (
        <div className="user_input_panel">
            <input
                ref={userTextInput}
                type="text"
                name="user_text_input"
                id="user_text_input"
                className="user_text_input" />
            <button className="send_btn" onClick={onSend}>SEND</button>
        </div>
    )
}

export default UserInputPanel;