import {NotificationTypes} from "./NotificationTypes";
import {InstanceData} from "./InstanceData";
import {MessageData} from "./MessageData";
import {SenderData} from "./SenderData";

export interface Notification {
    "receiptId": number;
    "body": {
        "typeWebhook": NotificationTypes;
        "instanceData": InstanceData;
        "timestamp": number;
        "idMessage": string;
        "senderData": SenderData;
        "messageData": MessageData;
    };

}

