import React from 'react';
import {routesArray} from "../utils/routes";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {routesArray.map(route => <Route key={route.path} path={route.path} element={route.component}/>)}
            </Routes>
        </Router>
    );
};

export default AppRouter;