import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
        <NavLink to='/home' className={(navData) => navData.isActive ? classes.active : ''}>Home</NavLink>
        <NavLink to='/products' className={(navData) => navData.isActive ? classes.active : ''}>Products</NavLink>
        <NavLink to='/contact' className={(navData) => navData.isActive ? classes.active : ''}>Contact</NavLink>
        <NavLink to='/cart' className={(navData) => navData.isActive ? classes.active : ''}>Cart</NavLink>
    </div>
  )
}

export default Header