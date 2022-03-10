import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <ul className="CartPage-items">
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item}>
            <div className="CartItem-quantity">
              <button
                onClick={() => onRemoveOne(item)}
                className="CartItem-removeOne"
              >
                -
              </button>
              <div className="CartItem-count">{item.count}</div>
              <button
                onClick={() => onAddOne(item)}
                className="CartItem-addOne"
              >
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
    </ul>
  );
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};
export default CartPage;
