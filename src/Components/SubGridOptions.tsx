import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Fragment } from "react/jsx-runtime";
export default function RightSubGridOptions(props: any) {
    return (
        <>
            <Grid
                container
                item
                xs
                gap={1}
                alignItems="flex-start"
                fontSize="1.5rem"
            >
                {props.options.map((item: any, index: any) => {
                    return (
                        <Fragment key={index}>
                            <Grid
                                item
                                style={{
                                    backgroundColor: "whitesmoke",
                                    padding: "0.4rem",
                                    flexGrow: 1,
                                }}
                                alignItems={"center"}
                                fontSize={"0.8rem"}
                            >
                                {item}
                            </Grid>
                        </Fragment>
                    );
                })}
            </Grid>
        </>
    );
}
