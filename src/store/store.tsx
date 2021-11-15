import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from 'redux-thunk'
import {InitialState} from "../utils/storeTypes";

const initialState: InitialState = {
    loading: false,
    sending: false,
    error: 0,
    user: [],
    reconnect: false,
    activeRoom: 0,
    rooms: [],
    users: [],
    messages: [],
    userTyping: false,
};

const reducers = combineReducers({})

export const store = createStore(reducers, initialState, applyMiddleware(thunk))