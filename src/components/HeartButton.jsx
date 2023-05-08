import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

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

function HeartButton({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = async () => {
    setIsFavorite(!isFavorite);

    const response = await fetch('/api/favorites', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })}

  return (
    <button onClick={handleFavoriteToggle} style={buttonstyle.button}>
      {isFavorite ? (<AiFillHeart/>) : (<AiOutlineHeart/>)}
    </button>
  );
}

export default HeartButton;
