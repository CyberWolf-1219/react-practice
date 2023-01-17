import "./UserContianer.css"
import React, { useContext } from 'react';
import { UserCard } from "./.."
import { ChatContext } from "../../context/chat/chat-context"

const UserContainer = () => {
    const chatContext = useContext(ChatContext);

    return (
        <div className="user_container">
            <div className="user_container_header">
                <h4>CONNECTED USERS</h4>
            </div>
            <div className="slider_container">
                <div className="slider">
                    {
                        chatContext.users.map((userObj) => {
                            return <UserCard key={userObj.user_id} userName={userObj.user_name} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UserContainer;