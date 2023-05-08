import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const style = {
  button: {
    border: "none",
    backgroundColor: "white",
    color: "black",
    padding: '0.25rem 0.5rem'
  }
}

const Cart = () => {
  const [itemCount, setItemCount] = useState(0)
  const navigate = useNavigate()

  return (
    <button style={style.button} onClick={() => navigate('/cart')}>
        <AiOutlineShoppingCart size={45}/>
        <span 
        class="badge badge-pill badge-danger"
        style={{position: 'relative', top: '-15px', right: '10px' }}>
          {itemCount}
          </span>
    </button>
  )
}

export default Cart;