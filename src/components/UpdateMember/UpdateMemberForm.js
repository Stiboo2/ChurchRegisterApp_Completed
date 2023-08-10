import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./UpdateMemberForm.module.css";
import { useNavigate } from "react-router-dom";

const UpdateMemberForm = ({ data, onUpdate }) => {
  const [title, setTitle] = useState(data.title);
  const [surname, setSurname] = useState(data.surname);
  const [cell, setCell] = useState(data.cell);
  const [idNumber, setTdNumber] = useState(data.idNumber);
  const [img, setImg] = useState(data.img);
  const [branch, setbranch] = useState(data.branch);
  const [amount, setAmount] = useState(data.amount);
  const [active, setActive] = useState(data.active);
  const [sealed, setSealed] = useState(data.sealed);
  const [birthday, setBirthday] = useState(data.birthday);
  const [serviceYears, setServiceYears] = useState(data.serviceYears);
  const [homePlace, setHomePlace] = useState(data.homePlace);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      ...data,
      title,
      surname,
      cell,
      idNumber,
      img,
      branch,
      amount,
      active,
      sealed,
      birthday,
      serviceYears,
      homePlace,
    };
    onUpdate(updatedData);
    navigate("/churchDataBase");
  };

  return (
    <form className={classes.EditFormMaim} onSubmit={handleSubmit}>
      <div className={classes.EditForm}>
        <div className={classes.ImageContainer}>
          <img src={img} alt="Your Image" className={classes.Image} />
        </div>
        <label>
          Title :
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Surname :
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Cell :
          <input
            type="text"
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
        </label>
        <br />
        <label>
          IdNumber :
          <input
            type="nummber"
            value={idNumber}
            onChange={(e) => setTdNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Img :
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </label>
        <br />
        <label>
          Branch :
          <input
            type="text"
            value={branch}
            onChange={(e) => setbranch(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount :
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Active :
          <input
            type="text"
            value={active}
            onChange={(e) => setActive(e.target.value)}
          />
        </label>
        <br />
        <label>
          Sealed :
          <input
            type="text"
            value={sealed}
            onChange={(e) => setSealed(e.target.value)}
          />
        </label>
        <br />
        <label>
          Birthday :
          <input
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
        <br />
        <label>
          ServiceYears :
          <input
            type="text"
            value={serviceYears}
            onChange={(e) => setServiceYears(e.target.value)}
          />
        </label>
        <br />
        <label>
          HomePlace :
          <input
            type="text"
            value={homePlace}
            onChange={(e) => setHomePlace(e.target.value)}
          />
        </label>
        <br />
        <div className={classes.EditbuttonItem}>
          <button className={classes.buttonUpdate} type="submit">
            Update
          </button>
          <div className={classes.buttonBack}>
            <Link to="../churchDataBase">Back to Church Database</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateMemberForm;
