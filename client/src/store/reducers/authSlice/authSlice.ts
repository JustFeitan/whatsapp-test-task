import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "@models/User";

export interface authSliceInitialState {
    user: User | null;
    isLoading: boolean;
   error: string
}

const initialState: authSliceInitialState = {
    user: null,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: authSliceInitialState, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        setUserLoading: (state: authSliceInitialState) => {
            state.isLoading = true;
        },
        setUserError: (state: authSliceInitialState, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },

    }
})
