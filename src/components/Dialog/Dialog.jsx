import React, {createRef} from "react";


const Dialog = (props) => {

    let newMessage = createRef()

    const addNewMessage = () => {
        props.addMessage()
    }

    const onChangeMessage = () => {
        let text = newMessage.current.value
        props.changeMessage(text)
    }

    return (
        <div>
            {props.messages.map(message =>
                <div>{message}</div>
            )}
            <textarea
                      ref={newMessage}
                      value={props.newTextMessage}
                      onChange={onChangeMessage}
            />
            <button onClick={() => addNewMessage()}>Send</button>
        </div>
    )
}
export default Dialog