import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../redux/store'
import { BsCart3 } from "react-icons/bs"

const style = {
  button: {
    border: "none",
    backgroundColor: "white",
    color: "black",
    padding: '0.25rem 0.5rem'
  }
}

const Cart = () => {

  const navigate = useNavigate();
  // const [itemCount, setItemCount] = useState(0)

  // useEffect(() => {
  //   setItemCount(Carts.length)
  // }, [Carts])

  return (
    <button style={style.button} onClick={() => navigate('/cart')}>
      <BsCart3 size={45} />
      <span
        className="badge badge-pill badge-danger"
        style={{ position: 'relative', top: '-15px', right: '10px' }}>
        {(store.getState().cartReducer.Carts).length}
      </span>
    </button>
  )
}

export default Cart;