import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPages";
import SearchPage from "./pages/SearchPage";
import CarListPage from "./pages/CarListPage";
import CarDetailPage from "./pages/CarDetailPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/car',
        element: <SearchPage />,
    },
    {
        path: '/car/:query',
        element: <CarListPage />,
    },
    {
        path: 'car/detail/:id',
        element: <CarDetailPage />
    }

])

export default routes