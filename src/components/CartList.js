import { useSelector } from 'react-redux';
import CartItem from './CartItem'

function CartList() {
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <ul>
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={{ 
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              pricePerItem: item.pricePerItem
            }}
          />
        )
      })}
    </ul>
  )
}

export default CartList
