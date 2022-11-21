import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})

