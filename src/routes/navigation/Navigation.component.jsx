import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User.context";
import { CartContext } from "../../contexts/Cart.context";
import CartIcon from "../../components/cart-icon/Cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown.component";
import { signOutUser } from "../../utils/firebase/Firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
