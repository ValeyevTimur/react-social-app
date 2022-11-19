import React, {createRef} from "react";


const Dialog = ({state, dispatch}) => {
    let newMessage = createRef()

    let addNewMessage = () => {
        dispatch({type: 'ADD-MESSAGE'})
    }

    let onChangeMessage = () => {
        dispatch({type: 'UPDATE-TEXT-MESSAGE', text: newMessage.current.value})
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