import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import './Layout.scss';

const Layout: FC = () => {
    return (
        <div className='layout' >
            <main className='layout__container'>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
