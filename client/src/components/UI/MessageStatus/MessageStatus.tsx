import React, {FC} from 'react';
import {NotificationStatus} from "../../../models/Notifications/NotificationStatus";
import CheckMarkIcon from "../Icons/CheckMarkIcon";
import DoubleCheckIcon from "../Icons/DoubleCheckIcon";
import PendingIcon from "../Icons/PendingIcon";
import ErrorSendMessageIcon from "../Icons/ErrorSendMessageIcon";
import './MessageStatus.scss';

interface MessageStatusProps {
    status: NotificationStatus;
    size?: number
}

const MessageStatus: FC<MessageStatusProps> = ({status, size = 15}) => {
    switch (status) {
        case "pending":
            return <PendingIcon data-testid='message-status-icon-pending' size={size}/>
        case "sent":
            return <CheckMarkIcon data-testid='message-status-icon-sent' size={size}/>
        case "delivered":
            return <DoubleCheckIcon data-testid='message-status-icon-delivered' size={size}/>
        case "failed":
            return <ErrorSendMessageIcon data-testid='message-status-icon-failed' size={size}/>
        case "read":
            return <DoubleCheckIcon data-testid='message-status-icon-read' className='message-read-status' size={size}/>

    }


};

export default MessageStatus;
