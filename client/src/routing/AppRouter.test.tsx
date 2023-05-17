import {renderTestApp} from "@helpers/renderTestApp";
import React from "react";
import {AppStore} from "@store";

describe('Routing test', () => {
    let authReducerMock: AppStore['authReducer'] | null;
    beforeAll(() => {
        authReducerMock = {
            user: {
                idInstance: '123123',
                apiTokenInstance: 'asdasdasdasdsad'
            },
            isLoading: false,
            error: '',
        };
    });
    afterAll(() => {
        authReducerMock = null
    });

    test('Redirection to not founded page', () => {
        const {getByTestId} = renderTestApp(null, {
            route: '/asdasdasd12312'
        })
        expect(getByTestId('not-founded-page')).toBeInTheDocument();
    })
})
