import {User} from '@models/User';
import {Notification} from '@models/Notifications/Notification';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SendNotification} from "@models/Notifications/SendNotification";
import {OutgoingMessageStatus} from "@models/Notifications/OutgoingMessageStatus";
import {narrowNotificationToStatus} from "./helpers";
import {ChatHistory} from "@models/Notifications/ChatHistory";
import {HistoryChatRequest} from "@models/Notifications/HistoryChatRequest";

export const notificationsApi = createApi({
    reducerPath: 'notificationsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.green-api.com',
    }),
    tagTypes: ['receiveNotification'],
    endpoints: (build) => ({
        getNotification: build.query<Notification | OutgoingMessageStatus, User>({
            query: ({apiTokenInstance, idInstance}: User) => ({
                url: `/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
            }),
            providesTags: ['receiveNotification'],
            transformResponse(response: Notification | OutgoingMessageStatus, meta) {
                if (narrowNotificationToStatus(response)) return response
                return response
            }
        }),
        deleteNotification: build.mutation<boolean, [User, number]>({
            query: ([user, receiptId]: [User, number]) => ({
                url: `/waInstance${user.idInstance}/DeleteNotification/${user.apiTokenInstance}/${receiptId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['receiveNotification']
        }),
        sendNotification: build.mutation<{ idMessage: string }, [User, SendNotification]>({
            query: ([user, message]: [User, SendNotification]) => ({
                url: `/waInstance${user.idInstance}/SendMessage/${user.apiTokenInstance}`,
                method: "POST",
                body: message
            }),
            invalidatesTags: ['receiveNotification']
        }),
        getChatHistory: build.mutation<ChatHistory[], [User, HistoryChatRequest]>({
            query: ([user, historyRequest]: [User, HistoryChatRequest]) => ({
                url: `/waInstance${user.idInstance}/GetChatHistory/${user.apiTokenInstance}`,
                method: 'POST',
                body: historyRequest,
            }),
            // transformResponse(response: ChatHistory[], meta) {
            //   return response.reverse()
            // }
        })
    }),
});

