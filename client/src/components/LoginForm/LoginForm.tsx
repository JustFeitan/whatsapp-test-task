import React, {FC} from 'react';
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import SubmitButton from "../UI/buttons/SubmitButton/SubmitButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {User} from "../../models/User";

import * as yup from "yup";
const loginSchema = yup.object().shape({
    idInstance: yup
        .number()
        .transform((value, originalValue) => {
            return (originalValue === '' ? undefined : value)
        })
        .typeError('Id должен состоять из цифр ')
        .required('Введите ваш id из профиля green-api'),
    apiTokenInstance: yup
        .string()
        .matches(/^[a-z0-9]*$/, 'Неверный формат токена')
        .required('Введите ваш токен из профиля green-api'),
})

interface LoginFormState {
    idInstance: string;
    apiTokenInstance: string;
    phoneNumber: string;
}

interface LoginFormProps {
    onSubmit: (newUser: User) => void
}
const LoginForm: FC<LoginFormProps> = ({onSubmit}) => {

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormState, any>({
        mode: "onBlur",
        resolver: yupResolver(loginSchema)
    });

    const onLoginSubmit: SubmitHandler<LoginFormState> = (loginData) => {
        const newUser: User = {
            idInstance: loginData.idInstance,
            apiTokenInstance: loginData.apiTokenInstance,
        }
        onSubmit(newUser)
    }
    return (
        <Form
            data-testid='login-form'
            className='login__card__form'
            onSubmit={handleSubmit(onLoginSubmit)}
        >
            <Input
                label="IdInstance"
                type='text'
                error={!!errors.idInstance}
                helperText={errors.idInstance?.message}
                {...register('idInstance')}
            />
            <Input
                label="ApiTokenInstance"
                type='text'
                error={!!errors.apiTokenInstance}
                helperText={errors.apiTokenInstance?.message}
                {...register('apiTokenInstance')}
            />

            <SubmitButton
                className='login__card__btn'
            >
                Войти
            </SubmitButton>
        </Form>
    );
};

export default LoginForm;
