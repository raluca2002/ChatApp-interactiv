import React, { useContext, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";
import moment from "moment";
import "../../pages/quiz/style/Notifications.css"; // Asigură-te că ai stilurile corect importate

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const { notifications, userChats, allUsers, markAllNotificationsAsRead, markNotificationAsRead } = useContext(ChatContext);

    // Funcție pentru a calcula notificările necitite
    const unreadNotifications = unreadNotificationsFunc(notifications);

    // Modifică notificările pentru a adăuga numele expeditorului
    const modifiedNotifications = notifications.map((n) => {
        const sender = allUsers.find(user => user._id === n.senderId);
        return {
            ...n,
            senderName: sender?.name
        };
    });

    return (
        <div className="notifications">
            <div className="notifications-icon" onClick={() => setIsOpen(!isOpen)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    fill="white"  
                >
                    <title>notification</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                            <rect width="48" height="48" fill="none" />
                        </g>
                        <g id="icons_Q2" data-name="icons Q2">
                            <path d="M43.4,29.4l-3.2-3.2A4.5,4.5,0,0,1,39,23.3V17C39,8.9,33.6,2,24,2S9,8.7,9,17v7a2.6,2.6,0,0,1-.7,1.7L4.6,29.4A2,2,0,0,0,4,30.8V38a2,2,0,0,0,2,2H17.1a7,7,0,0,0,13.8,0H42a2,2,0,0,0,2-2V30.8A2,2,0,0,0,43.4,29.4ZM40,36H8V31.7l3.1-3.2A6.4,6.4,0,0,0,13,24V17c0-5.3,2.9-11,11-11s11,5.9,11,11v6.3A8.6,8.6,0,0,0,37.3,29L40,31.7Z" />
                        </g>
                    </g>
                </svg>
                {unreadNotifications?.length > 0 && (
                    <span className="notification-count">
                        <span>{unreadNotifications.length}</span>
                    </span>
                )}
            </div>
            {isOpen && (
                <div className="notifications-box">
                    <div className="notifications-header">
                        <h3>Notifications</h3>
                        <div
                            className="mark-as-read"
                            onClick={() => markAllNotificationsAsRead(notifications)}
                        >
                            Mark all as read
                        </div>
                    </div>
                    {modifiedNotifications.length === 0 ? (
                        <span className="notification">No notification yet...</span>
                    ) : (
                        modifiedNotifications.map((n, index) => (
                            <div
                                key={index}
                                className={n.isRead ? 'notification' : 'notification not-read'}
                                onClick={() => {
                                    markNotificationAsRead(n, userChats, user, notifications);
                                    setIsOpen(false);
                                }}
                            >
                                <span>{`${n.senderName} sent you a new message`}</span>
                                <span className="notification-time">
                                    {moment(n.date).calendar()}
                                </span>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Notification;
