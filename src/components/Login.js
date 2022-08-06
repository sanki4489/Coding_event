import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5500/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.hasOwnProperty("authtoken")) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert(json.error);
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            minLength="8"
            onChange={onChange}
            name="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" required>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
