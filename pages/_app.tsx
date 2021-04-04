import React from "react";
import {Provider} from "react-redux";
import "./index.css";
import {createWrapper} from "next-redux-wrapper";
import store from "../src/store/store";

const App = ({Component, pageProps}) => {

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>);
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
