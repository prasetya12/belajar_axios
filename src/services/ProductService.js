import axios from "axios";

export const fetchApiTodo = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
    if (data) {
        return data;

    }
}

export const postData = async (params) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/products`, {
        productName: params.productName,
        price: params.price
    })

    return data
}