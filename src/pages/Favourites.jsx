import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavourite, addToCart } from '../redux/actions/cart-actions'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa"

const Favourites = () => {

  const favourites = useSelector(state => state.favouriteReducer.favourites)
  const dispatch = useDispatch()

  const handleRemoveFromFavourite = (id) => {
    dispatch(removeFromFavourite(id))
  }

  const onClickHandler = (id) => {
    dispatch(addToCart(id))
  }

  return (
    <div>
      <div>
        <Header />
        <Navbar />
      </div>
      <div className='container'>
        <h1>Favourites</h1>
        {favourites.length === 0 ? (
          <>
            <hr />
            <div className="alert alert-secondary" role="alert">
              No Items in favourites list.
            </div>
            <hr />
          </>
        ) : (
          <table className="table">
            <tbody>
              {favourites.map((item) => (
                <tr key={item.productId.id}>
                  <td>
                    <div style={{ display: 'flex', justifyContent: 'start', gap: '1rem' }}>
                      <Link to={`/products/${item.productId.id}`}>
                        <img src={item.productId.image} alt={item.productId.title} width="100" maxHeight="100" />
                      </Link>
                      <h5>
                        Brand
                        <p className='text-secondary h6'>
                          {item.productId.title.length > 55 ? `${item.productId.title.substring(0, 55)}...` : item.productId.title}
                        </p>
                      </h5>
                    </div>
                  </td>
                  <td>$ {item.productId.price}</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveFromFavourite(item.productId.id)}>
                      <FaTrash />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => onClickHandler(item.productId)} className="btn btn-outline-primary btn-sm">
                      <FaShoppingCart />
                    </button>
                  </td>
                </tr>
              )
              )
              }
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
export default Favourites;
