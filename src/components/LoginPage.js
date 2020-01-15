import React, { useState } from "react";
import axios from "axios";
import cookies from "react-cookies";

export function LoginPage(props) {
  const [account, setAccount] = useState({ email: "", password: "" });

  function changeHandler(e) {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value
    });
  }
  function submit(e) {
    console.log(account);
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/login", {
          email: account.email,
          password: account.password
        })
        .then(res => {
          console.log(res.data)
          cookies.save("user_token", res.data);
          props.history.push("/Protected");
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={e => submit(e)}>
        <label>email</label>
        <input
          type="text"
          name="email"
          onChange={e => changeHandler(e)}
          value={account.email}
        />
        <label>password</label>
        <input
          type="text"
          name="password"
          onChange={e => changeHandler(e)}
          value={account.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
