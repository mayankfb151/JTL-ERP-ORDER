import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setSearch } from "../../app/features/counter/counterSlice";
export default function ComboBox() {
    const dispatch = useAppDispatch();
    return (
        <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={useAppSelector((state) => state.counter.searchOptions)}
            sx={{ width: "100%" }}
            renderInput={(params) => (
                <TextField
                    onChange={(e) => {
                        dispatch(setSearch(e.target.value));
                    }}
                    {...params}
                    label="Search orders..."
                />
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{ label: "Monty Python and the Holy Grail", year: 1975 }];
