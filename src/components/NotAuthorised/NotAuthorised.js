import React from "react";

const UnauthorizedPage = () => {
  return (
    <div>
      <h1>You Are Not Authorized</h1>
      <p>
        Sorry, but you do not have the necessary permissions to access the TAC
        DATABASE.
      </p>
      <p>Please contact Admin for rights.</p>
      {/* You can add more content or styling here */}
    </div>
  );
};

export default UnauthorizedPage;
