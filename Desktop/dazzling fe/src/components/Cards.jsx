import React, { useEffect } from "react";
import { useState } from "react";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("")
  }, []);

  return <div className="cards">Cards</div>;
}

export default Cards;
