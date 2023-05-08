import Header from '../components/Header'
import Navbar from '../components/navbar'
import { removeFromCart, increaseQuantity, decreaseQuantity, numberCart } from '../redux/actions/cart-actions'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const Cart = ({ cartItems, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const [showEmptyCartModal, setShowEmptyCartModal] = useState(false);

    const handleEmptyCartModal = () => {
        setShowEmptyCartModal(true);
    };


    return (
        <div>
            <div>
                <Header />
                <Navbar />
            </div>
            <div className='row'>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">

                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="container my-4">
                        <h1>Shopping Cart</h1>
                        {cartItems.length === 0 ? (
                            <div className="alert alert-warning" role="alert">
                                Your cart is empty. <Link to="/">Continue Shopping</Link>
                            </div>
                        ) : (
                            <>
                                <table className="table table-striped">
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
                                                    <Link to={`/products/${item.id}`}>
                                                        <img src={item.image} alt={item.title} className="me-2" width="50" height="50" />
                                                        {item.title}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <div className="input-group">
                                                        <button
                                                            className="btn btn-outline-secondary"
                                                            type="button"
                                                            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <FaMinus />
                                                        </button>
                                                        <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                                                        <button
                                                            className="btn btn-outline-secondary"
                                                            type="button"
                                                            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
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
                                                <button className="btn btn-outline-danger" onClick={handleEmptyCartModal}>
                                                    Empty Cart
                                                </button>
                                            </td>
                                            <td colSpan="2" className="text-end">
                                                <strong>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;

