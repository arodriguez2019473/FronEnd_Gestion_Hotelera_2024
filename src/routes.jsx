import  {DashboardPage} from "./pages/dashboard/DashboardPage.jsx";
import { AuthPage } from "./pages/auth/AuthPage.jsx";
import {HotelPage} from "./pages/hotel/HotelPage.jsx";

const routes = [
    { path: '/auth', element: <AuthPage /> },
   { path: '/hoteles', element: <HotelPage /> },
    { path: '/', element: <DashboardPage /> }
]

export default routes;
