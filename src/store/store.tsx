import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from 'redux-thunk'
import {errorReducer} from "./reducers";

const reducers = combineReducers({
    errorReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))