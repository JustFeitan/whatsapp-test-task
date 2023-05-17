import {authSliceInitialState} from "./authSlice";
import {authActions, authReducer} from "./index";

describe('authSlice tests', () => {
    let initialState: authSliceInitialState;
    beforeAll(() => {
        initialState = {
            user: null,
            isLoading: false,
            error: ''
        }
    })
    test('should return initial state', () => {
        expect(authReducer(undefined, {type: undefined})).toEqual(initialState)
    })

    test('should handle setting user', () => {

        expect(authReducer(initialState, authActions.setUser({
            idInstance: '123123123',
            apiTokenInstance: 'asd123dwqe123das'
        }))).toEqual({
            user: {
                idInstance: '123123123',
                apiTokenInstance: 'asd123dwqe123das'
            },
            isLoading: false,
            error: ''
        })
    })

    test('should handle setting user error', () => {
        expect(authReducer(initialState, authActions.setUserError('Error'))).toEqual({
            ...initialState,
            error: 'Error'
        })
    })
    test('should handle setting user isLoading', () => {
        expect(authReducer(initialState, authActions.setUserLoading())).toEqual({
            ...initialState,
            isLoading: true
        })
    })


})
