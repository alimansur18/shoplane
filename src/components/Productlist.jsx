import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useParams } from "react-router-dom";
import Endpoints from "../api/Endpoints";
import { Blocks } from 'react-loader-spinner'


const Productlist = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axios.get(Endpoints.CATEGORY_URL + category);
            setProducts(response.data);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [category])

    return (
        <div className="row product-list">
            {
                isLoading ?
                    <div style={{position: 'absolute', left: '50%', top: '50%'}}>
                        <Blocks
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"

                        />
                    </div>
                    :
                    (products.map(product => <Product data={product} />))
            }
        </div>
    )
}

export default Productlist;