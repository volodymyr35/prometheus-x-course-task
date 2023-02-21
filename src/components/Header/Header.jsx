import './Header.css';


export function Header(props) {
  const { name } = props;
  return (
    <div className="header">
      <div className="header__container">
        <h2>X-course task / {name}</h2>
        <nav className="navigation">
            <img src="../../images/cart.svg" alt="cart image" width="40"/>
            <button className="sign-out">Sign-Out</button>
            <img src="../../images/avatar.png" alt="user avatar" width="40"/>
            <span>{name}</span>
          </nav>
      </div>
    </div> 
  );
}
