export interface SendNotification {
    chatId: string;
    message: string;
    quotedMessageId?: string;
    archiveChat?: boolean;
    linkPreview?: boolean;
}
