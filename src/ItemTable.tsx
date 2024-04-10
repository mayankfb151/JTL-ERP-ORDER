import { Grid, Typography } from "@mui/material";
import BasicTable from "./Table";
import BasicGrid from "./layout/Body";
const ItemTable = (props: any) => {
    return (
        <Grid item mt={4}>
            <Typography variant="h5">Item table</Typography>
            <BasicGrid />
        </Grid>
    );
};
export default ItemTable;
