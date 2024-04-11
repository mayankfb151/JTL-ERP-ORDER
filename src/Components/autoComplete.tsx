import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setSearch } from "../../app/features/counter/counterSlice";
import MenuIntroduction from "./menu";
import { Grid, InputAdornment } from "@mui/material";
export default function ComboBox() {
    const dispatch = useAppDispatch();
    return (
        <Grid container direction={"row"} gap={2}>
            <Grid item flex={1}>
                <Autocomplete
                    size="small"
                    disablePortal
                    id="combo-box-demo"
                    options={useAppSelector((state) =>
                        state.counter.searchOptions.slice(0, 5)
                    )}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                        <TextField
                            onChange={(e) => {
                                dispatch(setSearch(e.target.value));
                            }}
                            {...params}
                            label={`Search ${useAppSelector(
                                (state) => state.counter.searchCategory
                            )}`}
                        />
                    )}
                />
            </Grid>
            <Grid item>
                <MenuIntroduction />
            </Grid>
        </Grid>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{ label: "Monty Python and the Holy Grail", year: 1975 }];
