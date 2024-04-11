import { render } from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Help usdod</h1>,
        errorElement: <h1>404 not found</h1>,
    },
]);
render(<RouterProvider router={router} />, document.getElementById("root"));
