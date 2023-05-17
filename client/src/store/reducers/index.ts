import {authReducer} from "./authSlice";
import {notificationsApi} from "@services/notificationsApi";

export const reducers = {
    authReducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer
}
