import React, {FC, JSX} from 'react';
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

interface RequiredAuthProps {
    children: JSX.Element;
}

const RequiredAuth: FC<RequiredAuthProps> = ({children}) => {

    const user = useAuth()
    if (!user) {
        return  <Navigate to='/'/>
    }

    return children;

};

export default RequiredAuth;
