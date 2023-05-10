import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import {useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Constants from '../api/Constants'
import { addToCart } from '../redux/actions/cart-actions'
import StarRating from '../components/StarRating'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa"

const ProductDetailPage = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({})
  const dispatch = useDispatch()

  
  const fetchData = async () => {
    const res = await axios.get(Constants.BASE_URL+id);
    console.log(res);
    setProduct(res.data);
  }

  const onClickHandler = () => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
      fetchData()
    }, [id])

  return (

    <>
    <Header />
    <Navbar />
    <div className="container jumbotron" style={{marginTop: '1rem'}}>
      <div className="wrapper ">
        <div className="row">
          <div className="col-md-6" align='center'>
            <img src={product.image} alt="" className='img-fluid' style={{maxHeight:'30rem', maxWidth:'28rem'}}/>
          </div>
          <div className="col-md-6">
            <h1 style={{fontWeight: 'bold'}}>Brand</h1>
            <h4 className='text-secondary'>{product.title}</h4>
            {/* <StarRating data={product.rating} /> */}

            <h3 className="card-title">
              <span className="text-secondary small">$</span> {product.price}</h3>
              <p className='text-dark'>{product.description}</p>
            <button onClick={onClickHandler} className='btn btn-primary'><FaShoppingCart /> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    Carts: state.cartReducer.Carts
  };
};

export default connect(mapStateToProps)(ProductDetailPage);

