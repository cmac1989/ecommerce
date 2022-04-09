import React from 'react'
import classes from './Products.module.css'
import productData from '../data/product.json'

function Products() {
  return (
    <div className={classes.products}>
      <h1>Products</h1>
        <ul className={classes.productList}>
          {productData.map((product) => {
            return <li className={classes.productItem}>
              <img src={product.image}></img>
              <div className={classes.productName}>{product.name}</div>
              <div className={classes.productPrice}>CAD ${product.price}</div>
              <button className={classes.btn}>Add to Cart</button>
            </li>
          })}
        </ul>
    </div>
  )
}

export default Products
