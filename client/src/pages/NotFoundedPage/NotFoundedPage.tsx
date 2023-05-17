import React from 'react';
import './NotFoundedPage.scss';
const NotFoundedPage = () => {
    return (
        <div className={'not-founded-page'} data-testid='not-founded-page'>
            <h1> Упс, такой страницы нет &#8594;
                <a href="/chats">   Чаты</a>
            </h1>
        </div>
    );
};

export default NotFoundedPage;
