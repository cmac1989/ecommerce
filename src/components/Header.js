import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classes from './Header.module.css'
import { CgShoppingCart } from 'react-icons/cg'

function Header() {
  const cartQuantity = useSelector(state => state.cart.totalAmount)
  return (
    <div className={classes.header}>
        <NavLink to='/home' className={(navData) => navData.isActive ? classes.active : ''}>Home</NavLink>
        <NavLink to='/products' className={(navData) => navData.isActive ? classes.active : ''}>Products</NavLink>
        <NavLink to='/contact' className={(navData) => navData.isActive ? classes.active : ''}>Contact</NavLink>
        <NavLink to='/cart' className={(navData) => navData.isActive ? classes.active : ''}> {cartQuantity} {<CgShoppingCart />}</NavLink>
    </div>
  )
}

export default Header