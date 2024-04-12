import { Search } from "@mui/icons-material";
import { Grid, InputAdornment } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";

import { setSearch } from "../../app/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import MenuIntroduction from "./menu";

export default function ComboBox() {
    const dispatch = useAppDispatch();
    return (
        <Grid container item gap={2} flex={1} justifyContent={"space-between"}>
            <Grid item flex={1} sx={{ position: "sticky", top: "100px" }}>
                <Autocomplete
                    size="small"
                    disablePortal
                    id="combo-box-demo"
                    style={{ zIndex: 9999 }}
                    options={useAppSelector((state) =>
                        state.counter.searchOptions.slice(0, 5)
                    )}
                    onChange={function (event, value: any) {
                        dispatch(setSearch(value?.label ? value?.label : ""));
                    }}
                    renderInput={(params) => (
                        <TextField
                            onChange={(e) => {
                                dispatch(setSearch(e.target.value));
                            }}
                            {...params}
                            label={`Search ${useAppSelector(
                                (state) => state.counter.searchCategory
                            )}`}
                            InputProps={{
                                startAdornment: (
                                    <>
                                        <Search />
                                    </>
                                ),
                            }}
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
