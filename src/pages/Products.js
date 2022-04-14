import React from 'react'
import productData from '../data/product.json'
import ProductItem from '../components/ProductItem'
import classes from './Products.module.css'

function Products(props) {

  return (
    <div className={classes.products}>
      <h1>Products</h1>
        <ul className={classes.productList}>
          {productData.map((product) => {
            return <ProductItem 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          })}
        </ul>
    </div>
  )
}

export default Products
