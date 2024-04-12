import { Divider, Grid } from "@mui/material";

import DataTable from "./MuiTable";
import TablePaginationDemo from "./Pagination";
import RightSubGrid from "./RightSubGrid";
import EnhancedTable from "./SimpleTable";
import Table from "./Table";
import BasicTable2 from "./TableX";

export default function MainSection(props: any) {
    const tableData = {
        // make sure all required component's inputs/Props keys&types match
        orderData: props.orderData,
    };
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
        <Grid item container flex={1}>
            <Grid item xs={12}>
                <Divider />
            </Grid>

            <Grid
                item
                container
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                style={{ overflow: "auto", width: "200px" }}
            >
                <EnhancedTable {...tableData} />
            </Grid>
        </Grid>
    );
}
