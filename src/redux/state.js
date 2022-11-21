import {dialogReducer} from "./dialog-reducer";


let store = {
    dialogsPage: {

            dialogData: [
                {'id': 1, 'name': 'Jack', 'shortText': 'Hello, watsuuup...'},
                {'id': 2, 'name': 'Mike', 'shortText': 'Call me back please...'},
                {'id': 3, 'name': 'Sara', 'shortText': 'how are youdsdsdsdsdsdsdsdsdsdsdssdsdsd?...'},
                {'id': 4, 'name': 'Dave', 'shortText': 'could you check email please...'},
            ],
            dialogInfo: [
                {
                    'id': 1,
                    'name': 'Jack',
                    'text': 'Hello, watsuuup...d asd asfsafas f fasf asf asf asf asf asf asf asf asf asf asf asf asf a'
                },
                {
                    'id': 2,
                    'name': 'Mike',
                    'text': 'Call me back please...sdfsdaggggggggggggggggggggggggggggggggggggggggggggggggggg'
                },
                {'id': 3, 'name': 'Sara', 'text': 'how are youdsdsdsdsdsdsdsdsdsdsdssdsdsd?...'},
                {'id': 4, 'name': 'Dave', 'text': 'could you check email please...asdasdddddddddddddddddddddddddddddd'},
            ],
            messages: [],
            newTextMessage: ''

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        dialogReducer(this._state, action)
        this._callSubscriber(this._state)
    }
}

window.store = store
export default store