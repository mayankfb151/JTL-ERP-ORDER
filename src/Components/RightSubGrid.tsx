import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Grid } from "@mui/material";

import RightSubGridTab from "./RightSubGridTab";
import RightSubGridOptions from "./SubGridOptions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function RightSubGrid(props: any) {
    return (
        <>
            <Grid
                container
                item
                padding={1}
                paddingTop={0.5}
                alignItems={"flex-start"}
                alignContent={"flex-start"}
                rowGap={1}
                sx={{ height: "15rem", marginBottom: "5rem" }}
            >
                <Grid item container xs={12} alignItems={"center"}>
                    <RightSubGridOptions options={props.options} />
                    <ArrowDropDownIcon
                        sx={{ color: "gray" }}
                        fontSize="large"
                    />
                </Grid>
                <Grid item container xs={12} alignItems={"flex-start"}>
                    <RightSubGridTab />
                </Grid>
            </Grid>
        </>
    );
}
