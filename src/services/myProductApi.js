import axios from "axios";

export async function getMyUserData()
{
    const ProductData = await axios.get("https://fakestoreapi.in/api/products");
    return ProductData.data;
}  