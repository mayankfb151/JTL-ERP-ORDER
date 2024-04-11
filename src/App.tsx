import BasicGrid from "./layout/Body";
import axios from "axios";
import { Outlet, useLoaderData } from "react-router-dom";
import MainSection from "./Components/MainSection";
import ComboBox from "./Components/autoComplete";
import { Grid } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../app/store";

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
        <Grid container rowGap={6}>
            <ComboBox />
            <MainSection {...tableData} />
        </Grid>
    );
}
