import React, { useContext } from "react";
import { Stack } from "react-bootstrap";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import UserChat from "./UserChat";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/avatar5.jpg";
import avatar6 from "../../assets/avatar6.jpg";
import avatar7 from "../../assets/avatar7.jpg";
import avatar8 from "../../assets/avatar8.jpg";
import avatar9 from "../../assets/avatar9.jpg";
import avatar10 from "../../assets/avatar10.jpg";
import avatar11 from "../../assets/avatar11.jpg";

const avatarList = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
];

const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * avatarList.length);
  return avatarList[randomIndex];
};

const UserSidebar = ({ chat }) => {
  const { userChats, user } = useContext(ChatContext);
  const { onlineUsers, notifications, markThisUserNotificationsAsRead } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);

  return (
    <div className="user-sidebar">
      {userChats && userChats.map((chat) => (
        <UserChat key={chat._id} chat={chat} user={user} />
      ))}
      <span className={isOnline ? "user-online" : ""}></span>
    </div>
  );
};

export default UserSidebar;
