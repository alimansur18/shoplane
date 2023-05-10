import Header from '../components/Header'
import Navbar from '../components/navbar'
import { removeFromCart, increaseQuantity, decreaseQuantity, emptyCart } from '../redux/actions/cart-actions'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { connect } from 'react-redux'



const Cartpage = (props) => {

    const {cartItems} = props

    const handleRemoveFromCart = (id) => {
        const {removeFromCart} = props
        removeFromCart(id)
    }

    const handleincreaseQuantity = (qty) => {
        const {increaseQuantity} = props;
        increaseQuantity(qty)
    }

    const handledecreaseQuantity = (qty) => {
        const {decreaseQuantity} = props;
        decreaseQuantity(qty)
    }

    const handleEmptyCart = () => {
        const {emptyCart} = props;
        emptyCart()
    }

    let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    let taxes = (total * 0.18).toFixed(2)

    return (
        <div>
            <div>
                <Header />
                <Navbar />
            </div>
            <div className='row'>

                <div className="col-md-9">
                    <div className="container my-4">
                        <h2>Shopping Cart</h2>
                        {cartItems.length === 0 ? (
                            <>
                                <hr />
                                <div className="alert alert-warning" role="alert">
                                    Your cart is empty. <Link to="/">Continue Shopping</Link>
                                </div>
                                <hr />
                            </>
                        ) : (
                            <>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div style={{ display: 'flex', justifyContent: 'start', gap:'1rem' }}>
                                                        <Link to={`/products/${item.id}`}>
                                                            <img src={item.image} alt={item.title} width="100" maxHeight="100" />
                                                        </Link>
                                                        <h5>
                                                            Brand
                                                            <p className='text-secondary h6'>
                                                                {item.title.length > 45 ? `${item.title.substring(0, 45)}...` : item.title}
                                                            </p>
                                                        </h5>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="input-group input-group-sm">
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            type="button"
                                                            onClick={() => handledecreaseQuantity(item.id)}
                                                        >
                                                            <FaMinus />
                                                        </button>
                                                        <h3 style={{ padding: '0.5rem' }}> {item.quantity} </h3>
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm"
                                                            type="button"
                                                            onClick={() => handleincreaseQuantity(item.id)}
                                                        >
                                                            <FaPlus />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>${item.price.toFixed(2)}</td>
                                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                                <td>
                                                    <button className="btn btn-outline-danger" onClick={() => handleRemoveFromCart(item.id)}>
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="3" className="text-end">
                                                <button className="btn btn-outline-danger" onClick={() => handleEmptyCart()}>
                                                    Empty Cart
                                                </button>
                                            </td>
                                            <td colSpan="2">
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{ margin: '3rem 2.5rem 0 0' }}>
                        <div className="card-body">
                            <h4>Order Summary</h4>
                            <table className="table">
                                <tbody>
                                    <tr className='text-secondary' >
                                        <th scope="row">Sub-Total</th>
                                        <td align='right'>$ {total}</td>
                                    </tr>
                                    <tr className='text-secondary'>
                                        <th scope="row">Shipping</th>
                                        <td align='right'>$ 5</td>
                                    </tr>
                                    <tr className='text-secondary'>
                                        <th scope="row">Taxes</th>
                                        <td align='right'>$ {taxes}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bold'>Order total</th>
                                        <td align='right'>$ {Number.parseFloat(total + taxes).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.Carts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item)),
        increaseQuantity: (item) => dispatch(increaseQuantity(item)),
        decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
        emptyCart: () => dispatch(emptyCart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cartpage);


