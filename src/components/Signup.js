import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="mb-3">
            cpassword
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              minLength="8"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="cpassword"
              id="cpassword"
              minLength="8"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" required>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
