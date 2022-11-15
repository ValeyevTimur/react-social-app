import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addMessage, subscribe, updateTextMessage} from "./redux/state";
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addMessage={addMessage} updateTextMessage={updateTextMessage}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

subscribe(rerenderEntireTree)

rerenderEntireTree(state)
