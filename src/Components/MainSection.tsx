import { Divider, Grid } from "@mui/material";

import RightSubGrid from "./RightSubGrid";
import Table from "./Table";
import TablePaginationDemo from "./Pagination";
import DataTable from "./MuiTable";
export default function MainSection() {
    const optionsArray = [
        "Stocks",
        "Suppliers",
        "Prices",
        "Special Prices",
        "Linked Items",
    ];
    const style = {
        py: 0,
        width: "100%",
        maxWidth: 360,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
    };
    const optionsArray2 = [
        "eBay Templates",
        "Attributes / Field Characterstics",
        "Custom Overview",
    ];
    return (
        <Grid item container direction="column" xs columnGap={2}>
            <Grid item container xs>
                <Divider sx={{ marginBottom: "0.1rem" }} />
            </Grid>
            <Grid item container xs columnGap={"3"}>
                <Grid item container md={12} xs={12}>
                    <DataTable />
                </Grid>
            </Grid>
        </Grid>
    );
}
