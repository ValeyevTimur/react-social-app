const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE'

export const dialogReducer = (state, action) => {
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