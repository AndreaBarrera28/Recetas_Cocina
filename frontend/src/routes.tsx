import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <Navigate to="/dashboard" /> },
            // { path: "ingredients/index", element: <IngredientIndex /> },
            { path: "hola-mundo/index", element: <Main /> }
        ],
        errorElement: <ErrorPage />,
    }

]);

export default router;
