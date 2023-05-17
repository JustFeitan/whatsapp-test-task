import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage/LoginPage";
import ChatPage from "../pages/ChatPage/ChatPage";
import NotFoundedPage from "../pages/NotFoundedPage/NotFoundedPage";
import RequiredAuth from "../hoc/RequiredAuth";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<LoginPage/>}/>

            </Route>
            <Route path='/chats' element={
                <RequiredAuth>
                    <ChatPage/>
                </RequiredAuth>
            }/>
            <Route path='*' element={<NotFoundedPage/>}/>
        </Routes>
    );
};

export default AppRouter;
