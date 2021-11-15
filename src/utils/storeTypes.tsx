export interface InitialState{
    loading: boolean;
    sending: boolean;
    error: number;
    user: string[];
    reconnect: boolean;
    activeRoom: number;
    rooms: string[];
    users: string[];
    messages: string[];
    userTyping: boolean;
}