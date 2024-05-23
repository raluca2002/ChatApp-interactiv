import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
    const { user } = useContext(AuthContext);
    const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);

    return (
        <div className="all-users">
            {potentialChats && potentialChats.map((u, index) => {
                const initial = u.name.charAt(0).toUpperCase();

                return (
                    <div className="single-user" key={index} onClick={() => createChat(user._id, u._id)}>
                        {/* Utilizăm o clasă CSS pentru a stiliza cercurile */}
                        <div className="user-avatar" title={u.name}>
                            {initial}
                        </div>
                        <span className={onlineUsers?.some((user) => user?.userId === u?._id) ? "user-online" : ""}></span>
                    </div>
                );
            })}
        </div>
    );
};

export default PotentialChats;
