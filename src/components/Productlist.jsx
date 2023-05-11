import { useState,useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useParams } from "react-router-dom";
import Endpoints from "../api/Endpoints";

const Productlist = () => {
    const {category} = useParams()
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(Endpoints.CATEGORY_URL+category);
        setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [category])

    return(
        <div className="row product-list">
            {
                products.map(product => <Product data={product} />)
            }
        </div>
    )
}

export default Productlist;