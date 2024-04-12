import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export default function DividedOptions() {
    const items: string[] = new Array(8).fill("Option");
    items[0] = "Order";
    items[1] = "Item";
    items[2] = "Procurement";

    return (
        <Grid
            container
            item
            columnGap={2}
            rowGap={2}
            justifyContent={"flex-start"}
        >
            {items.map((val, index) => {
                return (
                    <Grid
                        sx={{
                            backgroundColor: "whitesmoke",
                            padding: 1,
                            flexGrow: 1,
                            fontSize: "0.8rem",
                        }}
                        item
                        key={index}
                    >
                        {val}
                    </Grid>
                );
            })}
        </Grid>
    );
}
