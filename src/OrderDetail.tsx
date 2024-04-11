import { Link, LoaderFunction, useLoaderData } from "react-router-dom";
import MainSection from "./Components/MainSection";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Params {
    todoId: string;
}

export const loader: LoaderFunction = async ({ params }) => {
    let response = await axios.get(`http://localhost:5000/orders/${params.id}`);
    return response.data;
};

export default function OrderDetail() {
    const data = useLoaderData();
    return (
        <>
            <h1>{JSON.stringify(data)}</h1>
            <Link to={"/"}>Home</Link>
        </>
    );
}
