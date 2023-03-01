import cart from '../../images/cart.svg';
import avatar from '../../images/avatar.png';
import { Link } from 'react-router-dom';
import './Header.css';


export function Header(props) {
  const { name } = props;
  return (
    <div className="header">
      <div className="header__container">
        <h2>X-course task / {name}</h2>
        <nav className="navigation">
          <Link to='/cart'>
            <img src={cart} alt="cart" width="40"/>
            </Link>
            <Link to='/'>
            <button className="sign-out">Sign-Out</button>
            </Link>
            <img src={avatar} alt="user avatar" width="40"/>
            <span>{name}</span>
          </nav>
      </div>
    </div> 
  );
}

// TODO:
// 1. Add if statement to visualization navbar on all pages without signIn page.