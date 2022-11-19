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
    addMessage () {
        this._state.messages.push(this._state.newTextMessage)
        this._state.newTextMessage = ''
        this._callSubscriber(this._state)
    },
    updateTextMessage (text) {
        this._state.newTextMessage = text
        this._callSubscriber(this._state)
    },
    subscribe (observer)  {
        this._callSubscriber = observer
    }
}
window.store = store
export default store