import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import { CgShoppingCart } from 'react-icons/cg'

function Header() {
  return (
    <div className={classes.header}>
        <NavLink to='/home' className={(navData) => navData.isActive ? classes.active : ''}>Home</NavLink>
        <NavLink to='/products' className={(navData) => navData.isActive ? classes.active : ''}>Products</NavLink>
        <NavLink to='/contact' className={(navData) => navData.isActive ? classes.active : ''}>Contact</NavLink>
        <NavLink to='/cart' className={(navData) => navData.isActive ? classes.active : ''}> 0 {<CgShoppingCart />}</NavLink>
    </div>
  )
}

export default Header