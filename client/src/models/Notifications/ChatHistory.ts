import {NotificationStatus} from "./NotificationStatus";
import {MessageTypes} from "./MessageTypes";

export interface ChatHistory {
    type: 'outgoing' | 'incoming';
    timestamp: number;
    idMessage: string;
    statusMessage?: NotificationStatus;
    typeMessage: MessageTypes;
    chatId: string;
    senderId?: string;
    senderName?: string;
    textMessage?: string;
    downloadUrl?: string;
    caption?: string;
    location?: object
    contact?: object;
    extendedTextMessage?: object;
}
