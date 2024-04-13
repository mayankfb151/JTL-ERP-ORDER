import axios from "axios";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { setSearchOptions } from "../../app/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { store } from "../../app/store";
import App, { Loader as rootLoader } from ".././App";
import OrderDetail, { loader as orderLoader } from ".././OrderDetail";
import { NavigationManager } from "../../src/Components/NavigationManager";

export const routes = [
    {
        path: "/",
        element: (
            <Provider store={store}>
                <NavigationManager>
                    <App />
                </NavigationManager>
            </Provider>
        ),
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
            }

            return data ? data : [];
        },
        errorElement: <h1>404 not found</h1>,
        children: [
            {
                path: "page-1",
                element: <h1>Help from darpa USDOD</h1>,
                loader: orderLoader,
            },
        ],
    },
];
