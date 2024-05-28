import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import ChatBox from "../components/chat/ChatBox";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import UserChat from "../components/chat/UserChat";
import PotentialChats from "../components/chat/PotentialChats";
import "./quiz/style/Chat.css";  // Importați fișierul CSS

const Chat = () => {
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateCurrentChat } = useContext(ChatContext);

    return (
        <Container fluid className="d-flex flex-column vh-100 chat-container">
            <PotentialChats />
            {userChats?.length < 1 ? null : (
                <Stack direction="horizontal" gap={4} className="align-items-start flex-grow-1">
                    <Stack className="messages-box flex-grow-0 pe-3 larger-message-box" gap={3}>
                        {isUserChatsLoading && <p>Loading chats...</p>}
                        {userChats?.map((chat, index) => {
                            return (
                                <div key={index} onClick={() => updateCurrentChat(chat)}>
                                    <UserChat chat={chat} user={user} />
                                </div>
                            )
                        })}
                    </Stack>
                    <ChatBox />
                </Stack>
            )}
        </Container>
    );
}

export default Chat;