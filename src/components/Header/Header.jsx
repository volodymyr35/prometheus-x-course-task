import cart from '../../images/cart.svg';
import avatar from '../../images/avatar.png';
import './Header.css';


export function Header(props) {
  const { name } = props;
  return (
    <div className="header">
      <div className="header__container">
        <h2>X-course task / {name}</h2>
        <nav className="navigation">
            <img src={cart} alt="cart" width="40"/>
            <button className="sign-out">Sign-Out</button>
            <img src={avatar} alt="user avatar" width="40"/>
            <span>{name}</span>
          </nav>
      </div>
    </div> 
  );
}
