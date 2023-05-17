import React from "react";
import LoginForm from "./LoginForm";
import userEvent from '@testing-library/user-event';
import {render, screen} from "@testing-library/react";

describe('LoginForm validation tests', () => {
    test('with valid inputs', async () => {
        const onSubmitLogin = jest.fn()
        const user = userEvent.setup();
        const {getByRole, getByLabelText} = render(<LoginForm onSubmit={onSubmitLogin}/>);
        const idInstanceInput = getByLabelText('IdInstance');
        const apiTokenInstanceInput = getByLabelText('ApiTokenInstance');

        await user.type(idInstanceInput, '1231412312');
        await user.type(apiTokenInstanceInput, '123123dsdqwe123123dawq1');
        await user.click(getByRole('button'));

        expect(onSubmitLogin).toHaveBeenCalled();

    })
    test('with invalid IdInstance', async () => {
        const onSubmitLogin = jest.fn()
        const user = userEvent.setup();
        const {getByRole, getByLabelText} = render(<LoginForm onSubmit={onSubmitLogin}/>);
        const idInstanceInput = getByLabelText('IdInstance');
        const apiTokenInstanceInput = getByLabelText('ApiTokenInstance');
        //empty idInstanceInput
        await user.type(apiTokenInstanceInput, '123123dsdqwe123123dawq1');
        await user.click(getByRole('button'));
        expect(getByRole('alert').textContent).toMatch('Введите ваш id из профиля green-api')
        //not numbers in idInstanceInput
        await user.type(idInstanceInput, 'asdasdaыв№1-;');
        await user.click(getByRole('button'));
        expect(getByRole('alert').textContent).toMatch('Id должен состоять из цифр')
        //empty idInstanceInput
        await user.clear(idInstanceInput);
        await user.click(getByRole('button'));
        expect(getByRole('alert').textContent).toMatch('Введите ваш id из профиля green-api')

        expect(onSubmitLogin).not.toHaveBeenCalled();

    })
    test('with invalid ApiTokenInstance', async () => {
        const onSubmitLogin = jest.fn()
        const user = userEvent.setup();
        const {getByRole, getByLabelText} = render(<LoginForm onSubmit={onSubmitLogin}/>);
        const idInstanceInput = getByLabelText('IdInstance');
        const apiTokenInstanceInput = getByLabelText('ApiTokenInstance');
        //empty apiTokenInstanceInput
        await user.type(idInstanceInput, '12312312312');
        await user.click(getByRole('button'));
        expect(getByRole('alert').textContent).toMatch('Введите ваш токен из профиля green-api')
        //invalid symbols in apiTokenInstanceInput
        await user.type(apiTokenInstanceInput, '@1-$234asdфыв');
        await user.click(getByRole('button'));
        expect(getByRole('alert').textContent).toMatch('Неверный формат токена')
        //empty apiTokenInstanceInput
        await user.clear(apiTokenInstanceInput);
        await user.click(getByRole('button'));
        expect(getByRole('alert').textContent).toMatch('Введите ваш токен из профиля green-api')

        expect(onSubmitLogin).not.toHaveBeenCalled();

    })



})
