'use client'

import { Provider } from "react-redux";
import store from "@redux/store";

interface Props{
    children?: React.ReactNode
}

const ReduxProvider = ({ children }: Props) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider;