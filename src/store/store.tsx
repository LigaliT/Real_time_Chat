import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from 'redux-thunk'
import {errorReducer} from "./reducers";

const reducers = combineReducers({
    error: errorReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>

export default store;