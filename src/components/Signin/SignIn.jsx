import './SignIn.css';

export function SignIn() {
  return (
    <div className="login__container">
      <img
        className="login__avatar"
        src="../../images/avatar.png"
        alt="user avatar"
      />
      <form className="login__form" action="/singIn" method="post">
        <label for="username">Username</label>
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
