import { routes } from "./routes";
import { RoutingStrategy } from "./types";
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
}

export function createRouter({ strategy, initialPathname }: CreateRouterProps) {
  if (strategy === 'browser') {
    return createBrowserRouter(routes);
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes, { initialEntries: initialEntries });
}