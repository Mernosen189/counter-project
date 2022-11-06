import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
  <div className="err">
    <div>
    <h1>404</h1>
    <p>Error this page does not exist</p>
    <Link to="/" className="go-back">Go back</Link>
    </div>
  </div>);
};

export default Error;