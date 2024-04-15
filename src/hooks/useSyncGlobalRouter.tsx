import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RouteEvent = CustomEvent<string>;

const useSyncAppRouter = ({ basename }: { basename: string }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const newPath = `${basename}${
        location.pathname === "/" ? "" : location.pathname
    }`;

    useEffect(() => {
        console.log("remote useeffect");
        window.dispatchEvent(new CustomEvent("app", { detail: newPath }));
        const appNavigated = ({ detail }: RouteEvent) => {
            alert("app navigated");
            if (detail == location.pathname) {
                return;
            }
            navigate(detail);
        };
        window.addEventListener("shell", appNavigated as EventListener);

        return window.removeEventListener(
            "shell",
            appNavigated as EventListener
        );
    }, [location]);
};
export default useSyncAppRouter;
