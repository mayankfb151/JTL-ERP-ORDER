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
                const searchCategory = store.getState().counter.searchCategory;
                let response = await axios.get("http://localhost:5000/orders");
                let data = response.data.filter((row: any) => {
                    return row[
                        searchCategory ? searchCategory : "name"
                    ].includes(searchString);
                });
                const options: any = [];
                if (data) {
                    data.forEach((element: any) => {
                        for (let key in element) {
                            if (key == searchCategory) {
                                options.push({
                                    label: element[`${key}`],
                                });
                            }
                        }
                    });

                    dispatch(setSearchOptions(options));
                }

                return data ? data : [];
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
