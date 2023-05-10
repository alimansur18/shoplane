import Constants from "../api/Constants";
import Header from "../components/Header";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";


const Homepage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const fetchData = async () => {
        try {
            const response = await axios.get(Constants.BASE_URL);
            setIsLoading(true);
            setProducts(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Header />
            <Navbar />
            <div className="row product-list">
                {
                    products.map(product => {
                        return <Product data={product} isLoading={isLoading} />;
                    })
                }
            </div>
        </>

    )
}

export default Homepage;