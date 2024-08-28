import { useContext } from "react";
import { Outlet ,Link} from "react-router-dom" 
import CartIcon from "../../cart-icon/cart-icon.component";
import { UserContext } from "../../../contexts/User.context";
import { CartContext } from "../../../contexts/cart.context";
import{ReactComponent as Crwnlogo} from '../../../asset/crown.svg';
import { signOutUser } from "../../../utils/firebase/Firebase.utils";
import {NavigationContainer,NavLinks,NavLink, LogoContainer}  from './navigation.styles';
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
         <LogoContainer to='/'>
          <Crwnlogo className='logo'/>
         </LogoContainer>
         <NavLinks>
            <NavLink to='/shop'>
               SHOP
            </NavLink>
            {
               currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>
                     {' '}SIGN OUT {''}</NavLink>
               ) :(
               <NavLink to='/auth'>
                  SIGN IN
               </NavLink>)}
               <CartIcon /> 
         </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet/>
    </>
  )
}

export default Navigation;