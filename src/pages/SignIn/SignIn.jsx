import { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.png";
import "./SignIn.css";

export function SignIn({ setUsername }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setUsername(value);
    navigate("/books");
  };

  const isValidUsername = value.length >= 4 && value.length <= 16;

  return (
    <div className="login__container">
      <img className="login__avatar" src={avatar} alt="user avatar" />
      <form
        className="login__form"
        action="/singIn"
        method="post"
        onSubmit={submitHandler}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="type Username"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="sign__in" type="submit" disabled={!isValidUsername}>
          SignIn
        </button>
      </form>
    </div>
  );
}
