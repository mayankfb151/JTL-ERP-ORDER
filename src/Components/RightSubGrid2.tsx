import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Grid } from "@mui/material";
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
                alignItems={"space-between"}
                alignContent={"space-between"}
                rowGap={1}
                sx={{ height: "15rem" }}
            >
                <Grid item container xs={12} alignItems={"center"}>
                    <RightSubGridOptions options={props.options} />
                    <ArrowDropDownIcon
                        sx={{ color: "gray" }}
                        fontSize="large"
                    />
                </Grid>

                <Grid
                    container
                    item
                    xs={12}
                    direction={"row"}
                    justifyContent="flex-end"
                >
                    <Grid item>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                backgroundColor: "whitesmoke",
                                borderRadius: "0px",
                                color: "black",
                                height: "2rem",
                            }}
                            style={{
                                height: 20,
                                fontSize: "0.7rem",
                            }}
                        >
                            CLOSE
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
