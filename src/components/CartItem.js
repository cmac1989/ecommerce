import React from 'react'
import classes from '../pages/Cart.module.css'


function CartItem(props) {
  return (
        <div className={classes.itemInfo}>
            <div className={classes.firstRow}>
              <div className={classes.itemName}>{props.item.name}</div>
              <div className={classes.itemAmount}>
                <p>x{props.item.quantity}</p>
                <div className={classes.itemBtns}>
                  <button>-</button>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div className={classes.secondRow}>
              <div className={classes.itemPrice}>CAD${props.item.price}</div>
              <div className={classes.pricePerItem}>${props.item.pricePerItem}/item</div>
            </div>
          </div>
  )
}

export default CartItem