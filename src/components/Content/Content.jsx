import React from "react";
import Dialog from "../Dialog";
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialog-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newTextMessage: state.dialogsPage.newTextMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeMessage: (text) => {
            dispatch(updateTextMessageActionCreator(text))
        }
    }
}

const Content = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default Content