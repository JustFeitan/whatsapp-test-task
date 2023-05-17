import {ChatHistory} from "@models/Notifications/ChatHistory";
import {narrowNotificationToStatus} from "@services/helpers";
import {OutgoingMessageStatus} from "@models/Notifications/OutgoingMessageStatus";
import {useEffect, useState} from "react";
import {NotificationTypes} from "@models/Notifications/NotificationTypes";
import {Notification} from "@models/Notifications/Notification";
import {SendNotification} from "@models/Notifications/SendNotification";
import {MessageTypes} from "@models/Notifications/MessageTypes";
import {useAuth} from "../useAuth";
import {notificationsApi} from "@services/notificationsApi";

export const useSetCurrentChatMessage = (notification: OutgoingMessageStatus | Notification, chatHistory: ChatHistory[], chatId: string) => {
    const user = useAuth();
    const [chatMessages, setChatMessages] = useState<Partial<ChatHistory[] | null>>(chatHistory)
    const [sendNotificationRequest, sendNotificationResponse] = notificationsApi.useSendNotificationMutation();

    const setNotification = () => {
        switch (notification.body.typeWebhook) {
            case NotificationTypes.INCOMING_MESSAGE_RECEIVED:
                if (narrowNotificationToStatus(notification)) return;
                const newMessage: ChatHistory = {
                    chatId: chatId,
                    textMessage: notification.body.messageData.textMessageData.textMessage,
                    idMessage: notification.body.idMessage,
                    timestamp: +new Date(),
                    typeMessage: notification.body.messageData.typeMessage,
                    type: 'incoming',
                    senderId: notification.body.senderData.sender,
                    senderName: notification.body.senderData.senderName,
                }
                setChatMessages(prevState => [newMessage, ...prevState])
                break;
            case NotificationTypes.OUTGOING_API_MESSAGE_RECEIVED:

                break;
            case NotificationTypes.OUTGOING_MESSAGE_STATUS:
                if (!narrowNotificationToStatus(notification)) return;
                let updatedChat: ChatHistory[];
                if (notification.body.instanceData.wid === chatId) {
                    updatedChat = chatMessages.map((message) => message.idMessage === notification.body.idMessage
                        ? ({
                            ...message,
                            statusMessage: "read"
                        })
                        : message
                    )
                } else {
                    updatedChat = chatMessages.map((message) => message.idMessage === notification.body.idMessage
                        ? ({
                            ...message,
                            statusMessage: notification.body.status
                        })
                        : message
                    )
                }
                setChatMessages(updatedChat)
                break;
            default:
                console.log(notification)
        }
    }

    const sendNotification = async (inputMessageValue: string) => {

        if (!inputMessageValue) return;
        const newNotification: SendNotification = {
            chatId: chatId,
            message: inputMessageValue
        }
        const responseSendNotification = await sendNotificationRequest([user, newNotification]).unwrap();
        setChatMessages(prevState => [{
            chatId: chatId,
            textMessage: inputMessageValue,
            idMessage: responseSendNotification.idMessage,
            typeMessage: MessageTypes.TEXT_MESSAGE,
            statusMessage: 'pending',
            type: "outgoing",
            timestamp: +new Date()

        }, ...prevState])
    }

    useEffect(() => {
        if (!notification) return;
        setNotification()
    }, [notification?.receiptId])

    return {chatMessages, sendNotification, sendNotificationResponse}
}
