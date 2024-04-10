import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function DateRow() {
    return (
        <Grid container item alignItems="center" columnGap={2}>
            <Grid item>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    inputProps={{ style: { fontSize: 13 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
                />
            </Grid>
            <Grid item>
                <ArrowForwardIosIcon sx={{ color: "gray", fontSize: "1rem" }} />
            </Grid>
            <Grid item>
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    inputProps={{ style: { fontSize: 13 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
                />
            </Grid>
        </Grid>
    );
}
