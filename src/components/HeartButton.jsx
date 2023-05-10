import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { addToFavourite } from '../redux/actions/cart-actions';
import { useDispatch } from 'react-redux';

const buttonstyle = {
  button: {
    border: 'none',
    width: "20px",
    height: "20px",
    backgroundColor: "white",
    color: "red",
    fontSize: "20px",
    cursor: "pointer",
    margin: "0 10px 0 10px",
    padding: "0",
    alignSelf: "flex-end",
  }
}

function HeartButton(props) {

  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch()

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    dispatch(addToFavourite(props))
  }

  return (
    <button onClick={handleFavoriteToggle} style={buttonstyle.button}>
      {isFavorite ? (<AiFillHeart/>) : (<AiOutlineHeart/>)}
    </button>
  );
}

export default HeartButton;
