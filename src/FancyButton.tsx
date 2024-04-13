import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "../src/routing/router-factory";
import { RoutingStrategy } from "../src/routing/types";

export default function mount({
    mountPoint,
    initialPathname,
    routingStrategy,
}: {
    mountPoint: HTMLElement;
    initialPathname?: string;
    routingStrategy?: RoutingStrategy;
}) {
    const router = createRouter({ strategy: routingStrategy, initialPathname });
    const root = createRoot(mountPoint);
    root.render(<RouterProvider router={router} />);

    return () => queueMicrotask(() => root.unmount());
}

/*import { render } from "react-dom";
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
*/

/*import axios from "axios";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { setSearchOptions } from "../app/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { store } from "../app/store";
import App, { Loader as rootLoader } from "./App";
import OrderDetail, { loader as orderLoader } from "./OrderDetail";

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
                let data = response.data.filter((row: any, index: any) => {
                    return row[searchCategory]
                        .toLowerCase()
                        .includes(searchString.toLowerCase());
                });

                let options: any = [];
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
                    options = options.filter((option: any, index: any) => {
                        return (
                            index ===
                            options.findIndex((obj: any) => {
                                return obj.label === option.label;
                            })
                        );
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
*/
