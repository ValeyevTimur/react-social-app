import React, {createRef} from "react";
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialog-reducer";


const Dialog = ({state, dispatch}) => {
    let newMessage = createRef()

    let addNewMessage = () => {
        dispatch(addMessageActionCreator())
    }

    let onChangeMessage = () => {
        let text = newMessage.current.value
        dispatch(updateTextMessageActionCreator(text))
    }

    return (
        <div>
            {state.messages.map(message =>
                <div>{message}</div>
            )}
            <textarea
                      ref={newMessage}
                      value={state.newTextMessage}
                      onChange={onChangeMessage}
            />
            <button onClick={() => addNewMessage()}>Send</button>
        </div>
    )
}
export default Dialog