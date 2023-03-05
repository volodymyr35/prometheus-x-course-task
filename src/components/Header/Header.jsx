import { Link, useNavigate } from "react-router-dom";
import cart from "../../images/cart.svg";
import avatar from "../../images/avatar.png";
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
          <Link to="/cart">
            <img src={cart} alt="cart" width="40" />
          </Link>
          <button className="sign-out" onClick={navigateToSignIn}>
            Sign-Out
          </button>
          <img src={avatar} alt="user avatar" width="40" />
          <span>{username}</span>
        </nav>
      </div>
    </div>
  );
}
