import React, {createRef} from "react";


const Dialog = ({state, addMessage, updateTextMessage}) => {
    let newMessage = createRef()

    let addNewMessage = () => {
        addMessage()
    }

    let onChangeMessage = () => {
        updateTextMessage(newMessage.current.value)
    }

    return (
        <div>
            {state.messages.map(message =>
                <div>{message}</div>
            )}
            <textarea
                      ref={newMessage}
                      value={state.newTextMessage}
                      onChange={() => onChangeMessage()}
            />
            <button onClick={() => addNewMessage()}>Send</button>
        </div>
    )
}
export default Dialog