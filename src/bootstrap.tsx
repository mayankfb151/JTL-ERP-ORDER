import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "../src/routing/router-factory";
import { RoutingStrategy } from "../src/routing/types";

function mount({
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

export { mount };
const x = 12;
export default x;

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
