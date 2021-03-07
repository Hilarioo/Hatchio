import React from "react";
import { useState } from "react";

const User = () => {
  const [email, setEmail] = useState(""); //Email
  const [password, setPassword] = useState(""); //Password
  const [UserDB, setUserDB] = useState([]); //Users
  const api_get_users = () =>
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((json) => {
        setUserDB(json);
        console.log(json);
      });

  const api_register_user = () => {
    fetch(`http://localhost:5000/users/register?email=${email}&password=${password}`).then((e) =>
      console.log(`Response: ${JSON.stringify(e)}`)
    );
  };
  const api_login_user = () => {
    fetch(`http://localhost:5000/users/login?email=${email}&password=${password}`).then((e) =>
      console.log(`Response: ${JSON.stringify(e)}`)
    );
  };
  //Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    api_register_user();
  };
  return (
    <div>
      {/**Print DataBase */}
      <button onClick={api_get_users}>Print Users</button>
      {/**Insert Database */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default User;
