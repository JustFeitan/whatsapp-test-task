import {InstanceData} from "./InstanceData";
import {NotificationStatus} from "./NotificationStatus";
import {NotificationTypes} from "./NotificationTypes";
import {MessageTypes} from "./MessageTypes";

export interface OutgoingMessageStatus {
    receiptId: number;
    body: {
        messageData: MessageTypes;
        chatId: string;
        idMessage: string;
        instanceData: InstanceData;
        sendByApi: boolean;
        status: NotificationStatus;
        timestamp: number;
        typeWebhook: NotificationTypes;
        receiptId: number;
    }

}
