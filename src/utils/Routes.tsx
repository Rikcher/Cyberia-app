import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Agency from "../pages/Agency";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import Cases from "../pages/Cases";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "*",
                    element: <NotFound />,
                },
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "cases",
                    element: <Cases />,
                },
                {
                    path: "agency",
                    element: <Agency />,
                },
                {
                    path: "services",
                    element: <Services />,
                },
                {
                    path: "blog",
                    element: <Blog />,
                },
                {
                    path: "contacts",
                    element: <Contacts />,
                },
            ],
        },
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

export default router;
