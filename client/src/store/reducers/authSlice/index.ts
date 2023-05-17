import {authSlice} from "./authSlice";

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export {userSelector} from './selectors/userSelector'
