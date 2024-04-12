import { AlternateEmail, Person, Settings } from "@mui/icons-material";
import { Alert, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../app/hooks";
import { store } from "../app/store";
import ComboBox from "./Components/autoComplete";
import CustomSeparator from "./Components/breadcrumbs";
import MainSection from "./Components/MainSection";
import BasicTable2 from "./Components/TableX";
import ScrollableTabsButtonForce from "./Components/tabs";
import ColorTabs from "./Components/tabs";
import BasicGrid from "./layout/Body";

export async function Loader() {
    const searchString = store.getState().counter.searchString;
    let response = await axios.get("http://localhost:5000/orders");
    let data = response.data.filter((row: any) => {
        return row.name.includes(searchString);
    });
    /*const options = [];
    data.forEach((element: any) => {
        options.push({ label: element.name });
    });
    store.dispatch({ type: "setOptions", payload: options });
    */
    return data;
}

export default function App() {
    const navigate = useNavigate();
    const searchString = useAppSelector((state) => state.counter.searchString);
    React.useEffect(() => {
        navigate(`.`, { replace: true });
    }, [searchString]);

    const data = useLoaderData();

    const tableData = {
        // make sure all required component's inputs/Props keys&types match
        orderData: data,
    };
    return (
        <Grid container item direction={"row"} gap={1} mt={1}>
            <Grid
                item
                display={"flex"}
                xs={12}
                direction={"row"}
                alignItems={"center"}
            >
                <Grid xs={10} container gap={2}>
                    <ComboBox />
                </Grid>
                <Grid
                    item
                    xs={2}
                    container
                    gap={2}
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Settings />
                    <AlternateEmail />
                    <Person />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <CustomSeparator />
            </Grid>
            <Grid container item xs={12}>
                <ColorTabs />
            </Grid>
            <Grid item xs={12}>
                <MainSection {...tableData} />
            </Grid>
        </Grid>
    );
}
