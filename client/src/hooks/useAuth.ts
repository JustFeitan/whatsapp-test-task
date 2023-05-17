import {useAppSelector} from "./redux/useAppSelector";
import {userSelector} from "@store/reducers/authSlice";

export const useAuth = () => {
    const auth = useAppSelector(userSelector);
    return auth
}
