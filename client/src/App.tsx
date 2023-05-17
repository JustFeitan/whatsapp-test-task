import React, {useEffect} from "react";
import './App.scss';
import AppRouter from "./routing/AppRouter";
import {useActions} from "./hooks/redux/useActions";
import {authActions} from "./store/reducers/authSlice";

function App() {
    const {setUser} = useActions(authActions);
    if (localStorage.getItem('user')) {
        const userStorage = JSON.parse(localStorage.getItem('user'));
        setUser(userStorage);
    }
    useEffect(() => {
        document.title = 'WhatsApp'
    }, [])
    return <AppRouter data-testid=''/>;
}

export default App;
