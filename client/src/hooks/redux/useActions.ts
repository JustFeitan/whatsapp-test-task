import {useAppDispatch} from "./useAppDispatch";
import {ActionCreatorsMapObject, bindActionCreators} from "@reduxjs/toolkit";

export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
    const dispatch = useAppDispatch();
   return  bindActionCreators(actions, dispatch)
}
