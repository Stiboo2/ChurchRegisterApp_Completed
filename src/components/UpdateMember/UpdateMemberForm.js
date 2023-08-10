import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./UpdateMemberForm.module.css";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../Meals/Data/ImageUpload";
const UpdateMemberForm = ({ data, onUpdate }) => {
  const [imageInput, setImageInput] = useState(data.img);
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
  const imageUploadHandler = (imageURL) => {
    setImageInput(imageURL);
    setImg(imageURL);
  };
  return (
    <form className={classes.EditFormMaim} onSubmit={handleSubmit}>
      <div className={classes.EditForm}>
        <div className={classes.ImageContainer}>
          <img src={imageInput} alt="Your Image" className={classes.Image} />
        </div>
        <ImageUpload onImageUpload={imageUploadHandler} />
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Title : </label>
          <input
            className={classes.TitleInputEdit}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Surname : </label>
          <input
            className={classes.SurnameInputEdit}
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <br />
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Cell Number : </label>
          <input
            className={classes.CellInputEdit}
            type="text"
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
        </div>
        <br />
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Id Number : </label>
          <input
            className={classes.IdNumberInputEdit}
            type="nummber"
            value={idNumber}
            onChange={(e) => setTdNumber(e.target.value)}
          />
        </div>
        <br />
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Image : </label>

          <input
            className={classes.ImageInputEdit}
            type="text"
            value={imageInput}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <br />
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Branch : </label>
          <input
            className={classes.BranchInputEdit}
            type="text"
            value={branch}
            onChange={(e) => setbranch(e.target.value)}
          />
        </div>
        <br />
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Amount : </label>
          <input
            className={classes.AmountInputEdit}
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Active : </label>
          <select
            className={classes.ActiveInputEdit}
            value={active}
            onChange={(e) => setActive(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Sealed : </label>
          <select
            className={classes.SeaInputEdit}
            value={active}
            onChange={(e) => setSealed(e.target.value)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={classes.lineUpText}>
          <label className={classes.labelEdit}>Birthday : </label>
          <input
            className={classes.BirthdayInputEdit}
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div className={classes.lineUpText}>
          <label htmlFor="serviceYears">Number of years : </label>
          <div className={classes["custom-select"]}>
            <select
              id="serviceYears"
              value={serviceYears}
              onChange={(e) => setServiceYears(e.target.value)}
            >
              <option value="" disabled>
                Select a number of years
              </option>
              {[...Array(100).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="arrow"></div>
          </div>
        </div>
        <label className={classes.labelEdit}>
          <label> HomePlace : </label>
          <input
            className={classes.HomePlacenputEdit}
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
          <div>
            <Link className={classes.buttonBack} to="../churchDataBase">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateMemberForm;
