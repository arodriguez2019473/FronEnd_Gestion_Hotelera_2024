import  {DashboardPage} from "./pages/dashboard/DashboardPage.jsx";
import { AuthPage } from "./pages/auth/AuthPage.jsx";
import {HotelPage} from "./pages/hotel/HotelPage.jsx";
import RoomPage from "./pages/room/RoomPage.jsx";
import We from "./pages/we/We.jsx";

const routes = [
    { path: '/auth', element: <AuthPage /> },
   { path: '/hotel', element: <HotelPage /> },
    { path: '/', element: <DashboardPage /> },
    { path: '/room/rooms/:hotelId', element: <RoomPage /> },
    { path: '/we', element: <We/> }
]

export default routes;
