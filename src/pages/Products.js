import React from 'react'
import classes from './Products.module.css'

const DUMMYPRODUCTS = [
  {
    name: 'shoes',
  },
]

function Products() {
  return (
    <div className={classes.products}>
      <h1>Products</h1>
      <div className={classes.productList}>
        <div className={classes.productItem}>
          <img src="https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?s=612x612"></img>
          <div className={classes.productName}>Shoes</div>
          <div className={classes.productPrice}>CAD $178.99</div>
          <button className={classes.btn}>Add to Cart</button>
        </div>
      
      <div className={classes.productList}>
        <div className={classes.productItem}>
          <img src="https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?s=612x612"></img>
          <div className={classes.productName}>Shoes</div>
          <div className={classes.productPrice}>CAD $178.99</div>
          <button className={classes.btn}>Add to Cart</button>
        </div>
      </div>
      <div className={classes.productList}>
        <div className={classes.productItem}>
          <img src="https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?s=612x612"></img>
          <div className={classes.productName}>Shoes</div>
          <div className={classes.productPrice}>CAD $178.99</div>
          <button className={classes.btn}>Add to Cart</button>
        </div>
      </div>
      <div className={classes.productList}>
        <div className={classes.productItem}>
          <img src="https://media.istockphoto.com/photos/blue-sneakers-isolated-on-white-background-picture-id1308274455?s=612x612"></img>
          <div className={classes.productName}>Shoes</div>
          <div className={classes.productPrice}>CAD $178.99</div>
          <button className={classes.btn}>Add to Cart</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Products
