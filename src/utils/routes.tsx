import Login from "../views/Login";
import ChatDashboard from "../views/ChatDashboard";

interface routeTypes {
    path: string;
    component: JSX.Element;
}

export const routesArray:routeTypes[] = [
    {
        path: '/',
        component: <Login/>,
    },
    {
        path: '/chat',
        component: <ChatDashboard/>,
    }
];