import React from 'react'
import classes from './Cart.module.css'
import CartList from '../components/CartList'

function Cart() {
  return (
    <div>
        <h1>Cart</h1>
        <div className={classes.cart}>
          <h3>Your Orders</h3>
          <div className={classes.cartItem}>
            <CartList />
          </div>
        </div>
    </div>
  )
}

export default Cart