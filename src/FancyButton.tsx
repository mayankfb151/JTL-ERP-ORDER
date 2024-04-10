import { Grid, Typography } from "@mui/material";
import BasicTable from "./Table";
import BasicGrid from "./layout/Body";
const FancyButton = (props: any) => {
    return (
        <Grid item mt={4} sx={{ backgroundColor: "lightgray" }}>
            <Typography variant="h5">Order table</Typography>
            <BasicGrid />
        </Grid>
    );
};
export default FancyButton;
