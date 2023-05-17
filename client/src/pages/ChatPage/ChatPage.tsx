import React, {FC, useEffect} from 'react';
import './ChatPage.scss';
import Card from "../../components/UI/Card/Card";
import Header from "../../components/UI/Header/Header";
import {notificationsApi} from "@services/notificationsApi";
import {skipToken} from "@reduxjs/toolkit/query";
import Chat from "../../components/Chat/Chat";
import ChatListHeader from "../../components/ChatListHeader/ChatListHeader";
import {BackgroundIntroChatIcon} from "@components/UI/Icons/BackgroundIntroChatIcon";
import {useChats} from "@hooks/useChats";
import {useAuth} from "@hooks/useAuth";


const ChatPage: FC = () => {

    const user = useAuth();
    const {data: notification} = notificationsApi.useGetNotificationQuery(user || skipToken, {
        pollingInterval: 1000
    });
    const [deleteNotification] = notificationsApi.useDeleteNotificationMutation();

    //hook for change chat list and set current chat
    const {
        chats,
        addChat,
        onChatClickHandler,
        currentChat,
        chatHistoryResponse: {
            data: chatHistory,
            isLoading: isLoadingChatHistory
        }
    } = useChats(notification)

    const deleteNotificationHandler = async () => {
        await deleteNotification([user, notification.receiptId])
    }

    useEffect(() => {
        if (!notification) return;
        deleteNotificationHandler();
    }, [notification?.receiptId])


    return (
        <div className='chats' data-testid='chats-page'>
            <Header height='15vh'/>
            <Card className='chats__card'>
                <div className="chats__manage">
                    <ChatListHeader addChat={addChat}/>
                    <div className="chats__manage__search">
                        {/*<Input*/}
                        {/*    className='chats__manage__search__input'*/}
                        {/*/>*/}
                    </div>
                    <div className="chats__manage__list">
                        {
                            chats && chats.length ? chats.map(chat =>
                                    <div
                                        className={
                                            currentChat?.chatId === chat.chatId
                                                ? `chats__manage__list__chat-card active`
                                                : `chats__manage__list__chat-card`
                                        }
                                        key={chat.chatId}
                                        onClick={() => onChatClickHandler(chat)}
                                    >
                                        <div>
                                            {chat?.senderName}
                                        </div>
                                        {'+' + chat?.chatId.slice(0, -5)}
                                    </div>
                                )
                                : <p>
                                    У вас пока что нет чатов:)
                                </p>
                        }
                    </div>

                </div>
                <div className="chats__chat-window">
                    {
                        currentChat
                            ?
                            <>
                                {!isLoadingChatHistory &&
                                    <Chat
                                        notification={notification}
                                        chatId={currentChat.chatId}
                                        chatHistory={chatHistory && chatHistory.length ? chatHistory : null}
                                    />

                                }

                            </>
                            :
                            <div className="chats__chat-window__intro">
                                <BackgroundIntroChatIcon/>
                                <h1 className='chats__chat-window__intro__title'>WhatsApp Web</h1>
                                <div className='chats__chat-window__intro__text'>
                                    Отправляйте и&nbsp;получайте сообщения без необходимости оставляь телефон
                                    подключенным
                                    <br/>
                                    Используйте WhatsApp одновременно на&nbsp;четрыёх связанных
                                    устройствах&nbsp;и
                                    одном телефоне
                                </div>
                            </div>
                    }
                </div>


            </Card>

        </div>
    );
};

export default ChatPage;
