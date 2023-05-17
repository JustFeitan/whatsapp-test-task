import React from "react";
import {renderTestApp} from "@helpers/renderTestApp";
import {authSliceInitialState} from "@store/reducers/authSlice/authSlice";
import {waitFor} from "@testing-library/react";


describe('RequiredAuth hoc tests', () => {
    test('RequiresAuth does not allow access to the page when user unauthorized', async () => {
        const {getByTestId} = renderTestApp(null, {
            route: '/chats'
        })
        await waitFor(() => {
            expect(getByTestId('login-form')).toBeInTheDocument();
        })
    })
    test('RequiresAuth allow access to the page when user authorized', async () => {
        const authReducerMock: authSliceInitialState = {
            user: {
                idInstance: '1233123123',
                apiTokenInstance: 'asdasda213sd23d213d12'
            },
            isLoading: false,
            error: '',
        };
        const {getByTestId} = renderTestApp(null, {
            route: '/chats',
            initialReduxState: {
                authReducer: authReducerMock
            }
        })
        await waitFor(() => {
            expect(getByTestId('chats-page')).toBeInTheDocument();
        })
    })

})
