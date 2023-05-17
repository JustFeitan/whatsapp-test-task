import React, {FC, FormEvent, useState} from 'react';
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import SubmitButton from "../UI/buttons/SubmitButton/SubmitButton";
import parsePhoneNumberFromString, {isValidPhoneNumber} from "libphonenumber-js";
import {WhatsappIcon} from "../UI/Icons/WhatsappIcon";

interface ChatListHeaderProps {
    addChat: (chatId: string) => void;
}

const ChatListHeader: FC<ChatListHeaderProps> = ({addChat}) => {

    const [newChatModal, setNewChatModal] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [phoneNumberValidationError, setPhoneNumberValidationError] = useState<string>('');

    const normalizePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsedPhoneNumber = parsePhoneNumberFromString(e.target.value, 'RU');
        const formatedNumber = parsedPhoneNumber?.formatInternational();
        setPhoneNumber(formatedNumber);
    }

    const addNewChat = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if ( typeof phoneNumber === 'undefined' || !isValidPhoneNumber(phoneNumber)) {
            setPhoneNumberValidationError('Неверный формат телефона');
            return;
        }
        setPhoneNumberValidationError('');
        setNewChatModal(false);
        setPhoneNumber('');
        const chatId = phoneNumber.slice(1).split(' ').join('') + '@c.us';
        addChat(chatId)
    }

    const onOutsideClickHandler = () => {
        setPhoneNumber('');
        setPhoneNumberValidationError('');
        setNewChatModal(false)
    }

    return (

        <div className="chats__manage__header">
            <WhatsappIcon size={39}/>
            <form noValidate onSubmit={addNewChat}>
                <Modal visible={newChatModal} setVisible={setNewChatModal} onClick={onOutsideClickHandler}>
                    <Input
                        label="Введите номер телефона собеседника"
                        error={!!phoneNumberValidationError}
                        helperText={phoneNumberValidationError}
                        type='tel'
                        value={phoneNumber}
                        onChange={normalizePhoneNumber}
                    />
                    <SubmitButton>
                        Добавить
                    </SubmitButton>
                </Modal>
            </form>
            <SubmitButton
                type='button'
                variant={"outlined"}
                onClick={() => setNewChatModal(true)}
            >
                Добавить новый чат
            </SubmitButton>
        </div>

    );
};

export default ChatListHeader;
