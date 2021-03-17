import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const prd = cart[i];
    totalPrice = totalPrice + prd.price * prd.quantity;
  }

  let shipping = 0;
  if (totalPrice > 35) {
    shipping = 0;
  } else if (totalPrice > 15) {
    shipping = 0;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = totalPrice / 10;
  const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(totalPrice)}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>VAT: {formatNumber(tax)}</small>
      </p>
      <p>Total Price: {grandTotal}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
