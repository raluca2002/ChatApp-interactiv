// UserSidebar.js
import React, { useContext } from "react";
import { Stack } from "react-bootstrap";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import UserChat from "./UserChat"; // Asigură-te că ai importat corect

const UserSidebar = ({chat}) => {
    const { userChats, user } = useContext(ChatContext);
    const {onlineUsers, notifications, markThisUserNotificationsAsRead} = useContext(ChatContext);
    const {recipientUser} = useFetchRecipientUser(chat, user)
    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id)

    return (
        <div className="user-sidebar">
            {userChats && userChats.map((chat) => (
                <UserChat key={chat._id} chat={chat} user={user} />
            ))}
            <span className={isOnline ? "user-online": ""}></span>
        </div>
    );
};

export default UserSidebar;
