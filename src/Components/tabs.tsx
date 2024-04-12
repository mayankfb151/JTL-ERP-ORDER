import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function ColorTabs() {
    const [value, setValue] = React.useState("one");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                TabIndicatorProps={{
                    sx: {
                        bgcolor: "gray",
                        height: "1.5px",
                    },
                }}
                sx={{ minHeight: "25px", height: "25px" }}
            >
                <Tab
                    sx={{
                        minHeight: "20px",
                        height: "20px",
                        outline: 0,
                        fontSize: "0.8rem",
                    }}
                    value="one"
                    label="All"
                />
                <Tab
                    sx={{
                        minHeight: "20px",
                        height: "20px",
                        outline: 0,
                        fontSize: "0.8rem",
                    }}
                    value="two"
                    label="Pending"
                />
                <Tab
                    sx={{
                        minHeight: "20px",
                        height: "20px",
                        outline: 0,
                        fontSize: "0.8rem",
                    }}
                    value="three"
                    label="Processed"
                />
                <Tab
                    sx={{
                        minHeight: "20px",
                        height: "20px",
                        outline: 0,
                        fontSize: "0.8rem",
                    }}
                    value="four"
                    label="Delivered"
                />
            </Tabs>
        </Box>
    );
}
