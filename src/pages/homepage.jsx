import Constants from "../api/Constants";
import Header from "../components/Header";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Blocks } from 'react-loader-spinner'


const Homepage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const fetchData = async () => {
        try {
            const response = await axios.get(Constants.BASE_URL);
            setProducts(response.data);
            setIsLoading(false)
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
                {isLoading ?
                    <div style={{ position: 'absolute', left: '50%', top: '50%' }}>
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
                    products.map(product => {
                        return <Product data={product} isLoading={isLoading} />;
                    })
                    
                }
            </div>
        </>

    )
}

export default Homepage;