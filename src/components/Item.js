import React, {useState} from "react";



function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  const itemClass = inCart ? "in-cart" : ""
  const cartText = inCart ? "Remove From Cart" : "Add to Cart"
  
  function handleItemClick(){
    setCart((inCart) => !inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItemClick}>{cartText}</button>
    </li>
  );
}

export default Item;
