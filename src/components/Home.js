import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.navbar}>Ikhaya le ZiNyanga</div>

        <img
          className={classes.fullscreenImage}
          src="https://res.cloudinary.com/dkayrcyeb/image/upload/v1684784822/20220710_082245_r0i2aw.jpg"
          alt="Home Image"
        />
      </div>
    </>
  );
};

export default Home;
