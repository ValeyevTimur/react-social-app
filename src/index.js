import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()} addMessage={store.addMessage.bind(store)} updateTextMessage={store. updateTextMessage.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState())
