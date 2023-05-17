import {MessageTypes} from "./MessageTypes";

export interface MessageData {
    "typeMessage": MessageTypes,
    "extendedTextMessageData"?: ExtendedTextMessageData
    "textMessageData"?: TextMessageData
}


export interface ExtendedTextMessageData {
    text: string;
    description: string;
    title: string;
    reviewType: string;
    jpegThumbnail: string;
}

export interface TextMessageData {
    textMessage: string;
}


