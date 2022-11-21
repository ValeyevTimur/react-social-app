const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

const initialState = {
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
}

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push(state.newTextMessage)
            state.newTextMessage = ''
            return state
        case UPDATE_TEXT_MESSAGE:
            state.newTextMessage = action.text
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateTextMessageActionCreator = (text) => ({type: UPDATE_TEXT_MESSAGE, text})