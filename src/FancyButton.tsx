import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { Loader as rootLoader } from "./App";
import OrderDetail, { loader as orderLoader } from "./OrderDetail";
import { store } from "../app/store";
import { Provider } from "react-redux";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setSearchOptions } from "../app/features/counter/counterSlice";

const FancyButton = (props: any) => {
    const dispatch = useAppDispatch();
    const router = createBrowserRouter([
        {
            path: "/orders",
            element: <App />,
            loader: async () => {
                const searchString = store.getState().counter.searchString;
                let response = await axios.get("http://localhost:5000/orders");
                let data = response.data.filter((row: any) => {
                    return row.name.includes(searchString);
                });
                const options: any = [];
                data.forEach((element: any) => {
                    options.push({ label: element.name });
                });
                dispatch(setSearchOptions(options));
                return data;
            },
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

    return <RouterProvider router={router} />;
};

function Fun() {
    return (
        <Provider store={store}>
            <FancyButton />
        </Provider>
    );
}

export default Fun;
