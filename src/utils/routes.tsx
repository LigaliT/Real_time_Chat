import Login from "../views/Login";

interface routeTypes {
    path: string;
    component: JSX.Element;
}

export const routesArray:routeTypes[] = [
    {
        path: '/',
        component: <Login/>,
    },
    // {
    //     path: '/chat',
    //     component: ChatDashboard,
    // }
];