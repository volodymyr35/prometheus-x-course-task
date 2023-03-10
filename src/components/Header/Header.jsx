import { Link, useNavigate } from "react-router-dom";
import { CartCounter } from "../CartCounter";
import cart from "../../images/cart.svg";
import avatar from "../../images/avatar.png";
import books from "../../images/book.png";


import "./Header.css";

export function Header({ username, setUsername }) {
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/");
    setUsername("");
  };

  if (!username) {
    return (
      <div className="header">
        <div className="header__container">
          <h2>X-course task </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="header">
      <div className="header__container">
        <h2>X-course task / {username}</h2>
        <nav className="navigation">
          <Link to="/books">
            <img src={books} alt="books" width="40em" />
          </Link>

          <CartCounter>
            <Link to="/cart">
              <img src={cart} alt="cart" width="40em" />
            </Link>
          </CartCounter>
          <button className="sign-out" onClick={navigateToSignIn}>
            Sign-Out
          </button>
          <img src={avatar} alt="user avatar" width="40em" />
          <span>{username}</span>
        </nav>
      </div>
    </div>
  );
}
