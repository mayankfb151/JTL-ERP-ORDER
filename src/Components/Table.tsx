import { Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export default function Table() {
    const rows: string[] = new Array(15).fill(0);

    return (
        <>
            {rows.map((item, index) => {
                return (
                    <Grid
                        item
                        container
                        style={{
                            backgroundColor:
                                index % 2 == 0 ? "whitesmoke" : "white",
                        }}
                        padding={0}
                        justifyContent={"flex-start"}
                    >
                        <Checkbox />
                    </Grid>
                );
            })}
        </>
    );
}
