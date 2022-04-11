import React from 'react'
import classes from './Cart.module.css'

function Cart() {
  return (
    <div>
        <h1>Cart</h1>
        <div className={classes.cart}>
          <h3>Your Orders</h3>
          <div className={classes.cartInfo}>
            <div className={classes.productName}>
              <h1>Product Item</h1>
            </div>
            <div className={classes.cartPrice}>
              <h1>$123.99</h1>
              <p>$12.00/item</p>
            </div>
          </div>
          <div className={classes.cartQuantity}>
            <div>
              <h1>x3</h1>
            </div>
            <div>
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart