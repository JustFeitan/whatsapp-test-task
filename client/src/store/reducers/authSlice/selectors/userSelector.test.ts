import {userSelector} from "./userSelector";

describe('userSelector tests', () => {
    test('userSelector with empty state', () => {
        expect(userSelector({})).toEqual(null)
    })
    test('userSelector with filled state', () => {
        const authReducerMock = {
            user: {
                idInstance: '123123',
                apiTokenInstance: 'asdasdasdasdsad'
            },
            isLoading: false,
            error: '',
        };
        expect(userSelector({authReducer: authReducerMock})).toEqual(authReducerMock.user)
    })

})
