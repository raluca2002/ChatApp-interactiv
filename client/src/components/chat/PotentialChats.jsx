import React, { useContext, useRef } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
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
import "./chat.css"

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

const PotentialChats = () => {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  const scrollContainerRef = useRef(null);

  return (
    <div className="all-users-container" ref={scrollContainerRef}>
      {/* <div className="arrow arrow-left" onClick={scrollLeft}>{"<"}</div> */}
      <div className="all-users">
        {potentialChats && potentialChats.map((u, index) => {
          const avatar = getRandomAvatar();

          return (
            <div className="single-user" key={index} onClick={() => createChat(user._id, u._id)}>
              <div className="user-avatar" title={u.name}>
                <img src={avatar} alt={u.name} className="avatar-img" />
              </div>
              <div className="user-info">
                <div className="user-name">{u.name}</div>
                <span className={onlineUsers?.some((user) => user?.userId === u?._id) ? "user-online" : ""}></span>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="arrow arrow-right" onClick={scrollRight}>{">"}</div> */}
    </div>
  );
};

export default PotentialChats;