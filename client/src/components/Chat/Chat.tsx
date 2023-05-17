import React, {FC, useRef, useState} from 'react';
import Input from "../UI/Input/Input";
import SubmitButton from "../UI/buttons/SubmitButton/SubmitButton";
import {Notification} from "@models/Notifications/Notification";
import './Chat.scss';
import {OutgoingMessageStatus} from "@models/Notifications/OutgoingMessageStatus";
import MessageStatus from "../UI/MessageStatus/MessageStatus";
import {scrollOnMessage} from "@helpers/scrollOnMessage";
import {ChatHistory} from "@models/Notifications/ChatHistory";
import {useSetCurrentChatMessage} from "@hooks/notifications/useSetCurrentChatMessage";


interface ChatProps {
    notification: Notification | OutgoingMessageStatus;
    chatId: string;
    chatHistory: ChatHistory[] | null;
}

const Chat: FC<ChatProps> = ({notification, chatId, chatHistory}) => {

    const [inputMessageValue, setInputMessageValue] = useState<string>('');

    //handle messages depends on type, outgoing message status, incoming message or outgoing message
    const {chatMessages, sendNotification} = useSetCurrentChatMessage(notification, chatHistory, chatId)

    const refMessagesWindow = useRef<HTMLDivElement | null>(null);

    const sendNotificationSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await sendNotification(inputMessageValue)
        scrollOnMessage(refMessagesWindow.current)
        setInputMessageValue('');
    }


    return (
        <div className='current-chat'>
            <div className='current-chat__messages' ref={refMessagesWindow}>
                {
                    chatMessages && chatMessages.map(message =>
                        <div key={message.idMessage}>
                            {
                                message.type === 'incoming'
                                    ? <div className='current-chat__messages__incoming'>
                                        {message.textMessage}

                                    </div>
                                    : <div className='current-chat__messages__outgoing'>
                                        {message.textMessage}
                                        <div className='current-chat__messages__outgoing__status'>
                                            <MessageStatus status={message.statusMessage}/>
                                        </div>
                                    </div>
                            }
                        </div>
                    )
                }
            </div>
            <div>
                <form className='current-chat__input-wrapper'>
                    <Input
                        type='text'
                        value={inputMessageValue}
                        onChange={event => setInputMessageValue(event.target.value)}
                    />
                    <SubmitButton
                        type='submit'
                        onClick={sendNotificationSubmit}
                    >
                        Send
                    </SubmitButton>
                </form>
            </div>
        </div>
    );
};

export default Chat;
