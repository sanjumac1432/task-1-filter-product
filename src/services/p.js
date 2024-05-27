import axios from "axios";

export async function getUserData()
{
    const d = await axios.get("https://fakestoreapi.in/api/products");
    return d.data;
}  