import {Actions, InitialState} from "../utils/storeTypes";

export const appState: InitialState = {
    loading: false,
    sending: false,
    error: null,
    user: [],
    reconnect: false,
    activeRoom: 0,
    rooms: [],
    users: [],
    messages: [],
    userTyping: false,
};

export function errorReducer(state:InitialState = appState, action:Actions){
    switch (action.type){
        case "SET_ERROR":{
            return {
                ...state,
                error: action.payload
            };
        }
        default:
            return state;
    }
}