import { useEffect, useState } from "react";
import { fetchApiTodo, postData } from "../services/ProductService";

export default function Products() {
    const [dataList, setDataList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");


    const getData = async () => {
        const data = await fetchApiTodo()
        setDataList(data)

    }

    useEffect(() => {
        getData()

    }, [])

    const onChangeProductName = (e) => {
        setProductName(e.target.value)
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const submitProduct = async () => {
        const params = {
            productName: productName,
            price: price
        }
        const data = await postData(params)
        if (data) {
            fetchApiTodo()

        }

    }

    return (
        <>
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <div>
                        <input placeholder="Product Name" value={productName} onChange={onChangeProductName} />
                    </div>
                    <div>
                        <input placeholder="Price" value={price} onChange={onChangePrice} />
                    </div>
                    <div>
                        <button onClick={submitProduct}>Tambah</button>
                    </div>
                </div>
                <ul>
                    {isLoading ? (<div>Loading</div>) : ""}
                    {dataList.map((item) => (
                        <li>{item.productName} - {item.price}</li>
                    ))}
                    {/* <li>
                        Todo 1
                    </li>
                    <li>
                        Todo 1
                    </li>
                    <li>
                        Todo 1
                    </li> */}
                </ul>
            </div>
        </>
    )
}