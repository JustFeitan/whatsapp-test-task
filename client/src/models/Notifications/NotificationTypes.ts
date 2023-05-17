import {OutgoingMessageStatus} from "./OutgoingMessageStatus";

export enum NotificationTypes {
    INCOMING_MESSAGE_RECEIVED = 'incomingMessageReceived',
    OUTGOING_API_MESSAGE_RECEIVED = 'outgoingAPIMessageReceived',
    OUTGOING_MESSAGE_STATUS = 'outgoingMessageStatus',
}

//export type NotificationTypes = OutgoingMessageStatus | Notification
