import { preflightStyles } from 'preflightStyles';

import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

import reportWebVitals from './reportWebVitals';

import { Provider as ReduxProvider } from "react-redux";

import { store } from "state";

import { BrowserRouter } from 'react-router-dom';



document.body.className = preflightStyles();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ReduxProvider 
            store={store}>
                <App/>
            </ReduxProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
