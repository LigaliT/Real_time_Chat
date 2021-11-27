import {SET_ERROR} from "../store/constants";

export interface InitialState{
    loading: boolean;
    sending: boolean;
    error: string | null;
    user: string[];
    reconnect: boolean;
    activeRoom: number;
    rooms: string[];
    users: string[];
    messages: string[];
    userTyping: boolean;
}

interface SetError{
    type: typeof SET_ERROR,
    payload: string,
}

export type Actions = SetError;