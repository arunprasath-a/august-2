import React from "react";
import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <React.Fragment>
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
