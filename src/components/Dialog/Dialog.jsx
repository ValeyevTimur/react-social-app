import React, {createRef} from "react";


const Dialog = ({ state, addMessage, changeMessage }) => {
    let newMessage = createRef()

    const addNewMessage = () => {
        addMessage()
    }

    const onChangeMessage = () => {
        let text = newMessage.current.value
        changeMessage(text)
    }

    return (
        <div>
            {state.dialogsPage.messages.map(message =>
                <div>{message}</div>
            )}
            <textarea
                      ref={newMessage}
                      value={state.dialogsPage.newTextMessage}
                      onChange={onChangeMessage}
            />
            <button onClick={() => addNewMessage()}>Send</button>
        </div>
    )
}
export default Dialog