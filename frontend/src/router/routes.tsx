import { RouteObject } from "react-router-dom";

import Login from "../pages/login/page";
import Home from "../pages/home/page";
import CreateTask from "../pages/createTask/page";
import RemoveTask from "../pages/remove/page";
import Complete from "../pages/Completed/page";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/View",
        element: <Home />,
    },
    {
        path: "/CreateTask",
        element: <CreateTask/>
    },
    {
        path: "/RemoveTask",
        element: <RemoveTask/>
    },
    {
        path: "/Complete",
        element: <Complete/>
    },
];