import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import * as React from "react";

export default function ClickableChips() {
    const handleClick = () => {
        console.info("You clicked the Chip.");
    };

    return (
        <Stack direction="row" spacing={1}>
            <Chip label="Orders" variant="outlined" onClick={handleClick} />
            <Chip label="Items" variant="outlined" onClick={handleClick} />
        </Stack>
    );
}
