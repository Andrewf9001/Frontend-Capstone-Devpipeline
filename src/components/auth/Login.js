import { useState } from "react";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorText(null);

    fetch("http://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        userName,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Logged In") {
          props.setIsAuthenticated(true);
        } else {
          props.setIsAuthenticated(false);
          setErrorText("Invalid Email or Password");
        }
      })
      .then(() => props.history.push("/about"))
      .catch((err) => setErrorText("Error logging in: ", err));
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="login-wrapper">
          {errorText === null ? null : <div>{errorText}</div>}

          <div className="username-wrapper">
            <label>Username: </label>
            <input
              required
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="password-wrapper">
            <label>Password: </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-btn-wrapper">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
