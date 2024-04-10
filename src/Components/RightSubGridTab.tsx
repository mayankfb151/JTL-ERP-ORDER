import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

export default function App() {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleTabChange = (e: any, tabIndex: any) => {
        setCurrentTabIndex(tabIndex);
    };

    return (
        <React.Fragment>
            <Tabs
                value={currentTabIndex}
                onChange={handleTabChange}
                TabIndicatorProps={{
                    sx: {
                        bgcolor: "gray",
                        height: "1.5px",
                    },
                }}
                sx={{ minHeight: "30px", height: "30px" }}
            >
                <Tab
                    sx={{
                        minHeight: "30px",
                        height: "30px",
                        outline: 0,
                    }}
                    style={{ fontSize: "0.7rem" }}
                    label="JTL WAWI"
                />
                <Tab
                    sx={{ minHeight: "30px", height: "30px", outline: 0 }}
                    style={{ fontSize: "0.7rem" }}
                    label="Amazon"
                />
                <Tab
                    sx={{ minHeight: "30px", height: "30px", outline: 0 }}
                    style={{ fontSize: "0.7rem" }}
                    label="Ebay"
                />
                <Tab
                    sx={{ minHeight: "30px", height: "30px", outline: 0 }}
                    style={{ fontSize: "0.7rem" }}
                    label="Customers"
                />
            </Tabs>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
                <Box sx={{ p: 3, fontSize: "0.9rem" }}>
                    <Typography variant="h5">Tab 1 Content</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum finibus odio eget orci bibendum, ac hendrerit
                        mi porta. Nullam volutpat libero tempus leo lacinia
                        ornare. In hac habitasse platea dictumst. Pellentesque
                        facilisis ex eget vulputate tincidunt. Curabitur
                        fringilla ultrices commodo.
                    </Typography>
                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3, fontSize: "0.9rem" }}>
                    <Typography variant="h5">Tab 2 Content</Typography>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Typography>
                </Box>
            )}

            {/* TAB 3 Contents */}
            {currentTabIndex === 2 && (
                <Box sx={{ p: 3, fontSize: "0.9rem" }}>
                    <Typography variant="h5">Tab 3 Content</Typography>
                    <Typography>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                    </Typography>
                </Box>
            )}

            {/* TAB 4 Contents */}
            {currentTabIndex === 3 && (
                <Box sx={{ p: 3, fontSize: "0.9rem" }}>
                    <Typography variant="h5">Tab 4 Content</Typography>
                    <Typography>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                    </Typography>
                </Box>
            )}
        </React.Fragment>
    );
}
