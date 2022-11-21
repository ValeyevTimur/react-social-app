import React from "react";
import classes from './Content.module.scss'
import Dialog from "../Dialog";
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialog-reducer";

const Content = ({ store }) => {

    const state = store.getState()

    const addMessage = () => {
        store.dispatch(addMessageActionCreator())
    }

    const changeMessage = (text) => {
        store.dispatch(updateTextMessageActionCreator(text))
    }

    return (
        <div className={classes.content}>
            <Dialog state={state} addMessage={addMessage} changeMessage={changeMessage}/>
        </div>
    )
}

export default Content