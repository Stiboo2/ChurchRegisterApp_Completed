import React from "react";
import { Link } from "react-router-dom";
const UnauthorizedPage = () => {
  return (
    <div>
      <h1>You Are Not Authorized</h1>
      <p>
        Sorry, but you do not have the necessary permissions to access the TAC
        DATABASE.
      </p>
      <p>Please contact Admin for rights.</p>

      <Link to="/">HOME</Link>
    </div>
  );
};

export default UnauthorizedPage;
