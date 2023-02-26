import avatar from '../../images/avatar.png'
import './SignIn.css';

export function SignIn() {
  
  return (
    <div className="login__container">
      <img
        className="login__avatar"
        src={avatar}
        alt="user avatar"
      />
      <form className="login__form" action="/singIn" method="post">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="type Username"
        />
        <button className="sign__in" type="submit">
          SignIn
        </button>
      </form>
    </div>
  );
}
