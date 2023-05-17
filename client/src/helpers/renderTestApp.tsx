/**@jest-environment jsdom
 *
 */
import { render } from "@testing-library/react";
import React from "react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import AppRouter from "../routing/AppRouter";
import { AppStore, setStore } from "../store";

interface renderTestAppOptions {
    route?: string;
    initialReduxState?: Partial<AppStore>;
}

export const renderTestApp = (
    component?: JSX.Element | JSX.Element[] | ReactNode | null,
    params?: renderTestAppOptions
) => {
    const store = setStore(params?.initialReduxState);
    return render(
        <MemoryRouter initialEntries={[params?.route || "/"]}>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </MemoryRouter>
    );
};
