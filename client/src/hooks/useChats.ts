import {useEffect, useState} from "react";
import {SenderData} from "@models/Notifications/SenderData";
import {OutgoingMessageStatus} from "@models/Notifications/OutgoingMessageStatus";
import {narrowNotificationToStatus} from "@services/helpers";
import {Notification} from "@models/Notifications/Notification";
import {HistoryChatRequest} from "@models/Notifications/HistoryChatRequest";
import {ChatHistory} from "@models/Notifications/ChatHistory";
import {notificationsApi} from "@services/notificationsApi";
import {useAuth} from "./useAuth";

export const useChats = (notification: Notification | OutgoingMessageStatus | null) => {

    const user = useAuth();
    const [chats, setChats] = useState<SenderData[]>([]);
    const [currentChat, setCurrentChat] = useState<SenderData | null>(null);

    const [getChatHistory, chatHistoryResponse] = notificationsApi.useGetChatHistoryMutation();

    const addChat = async (chatId: string) => {
        if (chats.some(chat => chat.chatId === chatId)) return;
        const historyChatRequest: HistoryChatRequest = {
            chatId: chatId,
            count: 40,
        }
        const response: ChatHistory[] = await getChatHistory([user, historyChatRequest]).unwrap();
        let incomingMessage = response.find(message => message.type === "incoming");
        const newChat: SenderData = {
            chatId: incomingMessage?.chatId ?? chatId,
            senderName: incomingMessage?.senderName ?? '',
            sender: incomingMessage?.senderId ?? '',
            chatName: '',
        }
        setChats(prevState => [...prevState, newChat]);
        setCurrentChat(newChat);
    }

    const onChatClickHandler = async (chat: SenderData) => {
        const historyChatRequest: HistoryChatRequest = {
            chatId: chat.chatId,
            count: 40,
        }
        await getChatHistory([user, historyChatRequest])
        setCurrentChat(chat);
    }

    const setChatsHandler = () => {
        if (!notification) return;
        if (!narrowNotificationToStatus(notification)) {
            if (!chats.some(chat => chat.chatId === notification.body.senderData.chatId)) {
                setChats([...chats, notification.body.senderData])
            }
        }
    }
    useEffect(() => {
        setChatsHandler()
    }, [notification?.receiptId])

    return {chats,currentChat ,addChat, onChatClickHandler, chatHistoryResponse}
}
