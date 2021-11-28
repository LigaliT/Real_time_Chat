import React from 'react';
import ChatNavBar from "./ChatNavBar";
import RoomList from "./RoomList";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import UserList from "./UserList";

const ChatDashboard = () => {
    return (
        <div>
            <ChatNavBar/>
            <RoomList/>
            <MessageList/>
            <MessageForm/>
            <UserList/>
        </div>
    );
};

export default ChatDashboard;