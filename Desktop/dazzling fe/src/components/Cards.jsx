import React, { useEffect } from "react";
import { useState } from "react";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts/");
  }, [])
    .then((res) => res.json())
    .then((data) => setCards(data));

  return <div className="cards">Cards</div>;
}

export default Cards;
