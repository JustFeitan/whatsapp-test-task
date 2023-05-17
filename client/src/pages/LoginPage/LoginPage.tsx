import React, {FC} from "react";
import "./LoginPage.scss";
import Card from "@components/UI/Card/Card";
import {useActions} from "@hooks/redux/useActions";
import {authActions} from "@store/reducers/authSlice";
import {User} from "@models/User";
import {useNavigate} from "react-router-dom";
import Header from "@components/UI/Header/Header";
import LoginForm from "@components/LoginForm/LoginForm";
import {WhatsappIcon} from "@components/UI/Icons/WhatsappIcon";



const LoginPage: FC = () => {

    const {setUser} = useActions(authActions);
    const navigate = useNavigate();

    const onLoginSubmit = (newUser: User) => {
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
        navigate('/chats')
    }


    return (
        <div className="login" data-testid='login-page'>
            <Header height='25vh'/>
            <div className="login__header">
                <WhatsappIcon/>
                <h1 className="login__header__title">WHATSAPP WEB</h1>
            </div>
            <Card>
                <h2 className='login__card__title'>Используйте WhatsApp на компьютере</h2>
                <LoginForm onSubmit={newUser => onLoginSubmit(newUser)}/>
            </Card>
        </div>
    );
};

export default LoginPage;
