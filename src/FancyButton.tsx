import * as React from "react";
import { Button, useTheme } from "@mui/material";
declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}
const FancyButton = () => {
    const theme = useTheme();
    console.log(theme.status.danger);
    return (
        <>
            <Button variant="contained">Button</Button>
        </>
    );
};
export default FancyButton;
