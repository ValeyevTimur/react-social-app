const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

let store = {
    _state: {
        dialogData: [
            {'id': 1, 'name': 'Jack', 'shortText': 'Hello, watsuuup...' },
            {'id': 2, 'name': 'Mike', 'shortText': 'Call me back please...' },
            {'id': 3, 'name': 'Sara', 'shortText': 'how are youdsdsdsdsdsdsdsdsdsdsdssdsdsd?...' },
            {'id': 4, 'name': 'Dave', 'shortText': 'could you check email please...' },
        ],
        dialogInfo: [
            {'id': 1, 'name': 'Jack', 'text': 'Hello, watsuuup...d asd asfsafas f fasf asf asf asf asf asf asf asf asf asf asf asf asf a' },
            {'id': 2, 'name': 'Mike', 'text': 'Call me back please...sdfsdaggggggggggggggggggggggggggggggggggggggggggggggggggg' },
            {'id': 3, 'name': 'Sara', 'text': 'how are youdsdsdsdsdsdsdsdsdsdsdssdsdsd?...' },
            {'id': 4, 'name': 'Dave', 'text': 'could you check email please...asdasdddddddddddddddddddddddddddddd' },
        ],
        messages: [],
        newTextMessage: ''
    },
    getState () {
        return this._state
    },
    _callSubscriber () {},
    subscribe (observer)  {
        this._callSubscriber = observer
    },
    dispatch (action) {
        switch (true) {
            case action.type === ADD_MESSAGE:
                this._state.messages.push(this._state.newTextMessage)
                this._state.newTextMessage = ''
                this._callSubscriber(this._state)
                break
            case action.type === UPDATE_TEXT_MESSAGE:
                this._state.newTextMessage = action.text
                this._callSubscriber(this._state)
                break
            default:
                break
        }
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateTextMessageActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_MESSAGE, text
    }
}

window.store = store
export default store