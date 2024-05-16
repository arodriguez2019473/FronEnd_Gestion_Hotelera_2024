import { DashboardPage } from "./pages/dashboard";
import {Login } from './components/Login'
import {Register } from './components/Register'

const routes = [
    { path: "/", element: <Login />},
    { path: '/auth', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/dash', element: <DashboardPage /> }
];


export default routes;