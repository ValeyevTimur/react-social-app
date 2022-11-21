import {combineReducers, legacy_createStore as createStore} from "redux";
import { dialogReducer } from "./dialog-reducer";

const reducers = combineReducers ({
    dialogsPage: dialogReducer
})

const store = createStore(reducers)

export default store