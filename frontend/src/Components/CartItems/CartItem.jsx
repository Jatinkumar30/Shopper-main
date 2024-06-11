import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";

import remove_icon from "../Assets/trash_icon.png";

const CartItem = () => {
  const {
    all_product,
    cartItem,
    addToCart,
    subtractFromCart,
    getTotalCartAmount,
    removeFromCart,
  } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e, idx) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={idx}>
              <div className="cartitems-format cartitems-format-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="cartitems-quantity">
                  <button
                    className="quantity"
                    onClick={() => subtractFromCart(e.id)}
                  >
                    -
                  </button>
                  <button>{cartItem[e.id]}</button>

                  <button className="quantity" onClick={() => addToCart(e.id)}>
                    +
                  </button>
                </div>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  style={{ color: "Red" }}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
