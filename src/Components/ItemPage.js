import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ItemPage.css";
import Item from "./Item";

function ItemPage({ items, onAddToCart }) {
  return (
    <ul className="ItemPage-items">
      {items.map((item) => (
        <li key={item.id} className="ItemPage-item">
          {/* modified code (added button inside Item) */}{" "}
          <Item item={item}>
            <button
              className="Item-addToCart"
              onClick={() => onAddToCart(item)}
            >
              Add to Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
}
ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
export default ItemPage;
