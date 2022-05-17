import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { preflightStyles } from "preflightStyles";

import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "state";

import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";

document.body.className = preflightStyles();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ReduxProvider 
            store={store}>
                <PersistGate 
                loading={null}
                persistor={persistStore(store)}>
                    <App/>
                </PersistGate>
            </ReduxProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
