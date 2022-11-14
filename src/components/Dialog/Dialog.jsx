import React, {createRef} from "react";


const Dialog = ({state, addMessage}) => {
    let newMessage = createRef()
    let addNewMessage = () => {
        addMessage(newMessage.current.value)
    }
    return (
        <div>
            {state.messages.map(message =>
                <div>{message}</div>
            )}
            <textarea name="" id="" cols="30" rows="10" ref={newMessage} ></textarea>
            <button onClick={() => addNewMessage()}>Send</button>
        </div>
    )
}
export default Dialog