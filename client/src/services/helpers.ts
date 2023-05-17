import {Notification} from "@models/Notifications/Notification";
import {OutgoingMessageStatus} from "@models/Notifications/OutgoingMessageStatus";

export function narrowNotificationToStatus(response: Notification | OutgoingMessageStatus): response is OutgoingMessageStatus {
    if (!response) return
    return 'body' in response && 'status' in response.body
}
