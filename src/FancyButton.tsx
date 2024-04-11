import {
    createBrowserRouter,
    createMemoryRouter,
    RouterProvider,
} from "react-router-dom";
import App, { loader as rootLoader } from "./App";
import ItemTable from "./ItemTable";
import OrderDetail, { loader as orderLoader } from "./OrderDetail";

const router = createBrowserRouter([
    {
        path: "/orders",
        element: <App />,
        loader: rootLoader,
        errorElement: <h1>404 not found</h1>,
        children: [
            {
                path: ":id",
                element: <OrderDetail />,
                loader: orderLoader,
            },
        ],
    },
]);
const FancyButton = (props: any) => {
    return <RouterProvider router={router} />;
};
export default FancyButton;
