import BasicGrid from "./layout/Body";
import axios from "axios";
import { Outlet, useLoaderData } from "react-router-dom";
import MainSection from "./Components/MainSection";

export async function loader() {
    let response = await axios.get("http://localhost:5000/orders");
    return response.data;
}
export default function App() {
    const data = useLoaderData();
    const tableData = {
        // make sure all required component's inputs/Props keys&types match
        orderData: data,
    };
    return (
        <>
            <Outlet />
            <MainSection {...tableData} />
        </>
    );
}
