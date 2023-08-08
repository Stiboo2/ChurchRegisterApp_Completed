import { useRef, useState } from "react";

import "./MemberForm.css";
import classes from "./MemberForm.module.css";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => /^\d{10}$/.test(value.trim());
const MemberForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
    cell: true,
    idNumber: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const cellInputRef = useRef();
  const idNumberInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCell = cellInputRef.current.value;
    const enteredIdNumber = idNumberInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = true; // Always valid, regardless of input
    const enteredCityIsValid = true; // Always valid, regardless of input
    const enteredPostalCodeIsValid = true; // Always valid, regardless of input
    const enteredCellIsValid = isTenChars(enteredCell);
    const enteredIdNumberIsValid = true; // Always valid, regardless of input

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
      cell: enteredCellIsValid,
      idNumber: enteredIdNumberIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredCellIsValid &&
      enteredIdNumberIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      title: enteredStreet,
      image: enteredCity,
      branch: enteredPostalCode,
      cell: enteredCell,
      idNumber: enteredIdNumber,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;
  const cellControlClasses = `${classes.control} ${
    formInputsValidity.cell ? "" : classes.invalid
  }`;
  const idNumberControlClasses = `${classes.control} ${
    formInputsValidity.idNumber ? "" : classes.invalid
  }`;

  const cancelHandler = () => {
    props.onCancelMeal();
  };

  return (
    <form className={classes.forma} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Name and Surname</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={cellControlClasses}>
        <label htmlFor="cell">Cell Number</label>
        <input type="text" id="cell" ref={cellInputRef} />
        {!formInputsValidity.cell && (
          <p>Please enter a valid Cell Phone Number!</p>
        )}
      </div>
      <div className={idNumberControlClasses}>
        <label htmlFor="idNumber">ID Number</label>
        <input type="text" id="idNumber" ref={idNumberInputRef} />
        {!formInputsValidity.idNumber && <p>Please enter a valid ID number!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">Image</label>
        <input
          type="file"
          id="city"
          ref={cityInputRef}
          directory="true" // Update the attribute to directory="true"
          webkitdirectory="true" // Add webkitdirectory="true"
        />
        {!formInputsValidity.city && (
          <p>Please select a valid image from the folder!</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Title</label>
        <select id="street" ref={streetInputRef}>
          <option value="Dade">Dade</option>
          <option value="Mzalwane">Mzalwane</option>
          <option value="Baba Priest">Baba Priest</option>
          <option value="Mama Mshumayeli">Mama Mshumayeli</option>
        </select>
        {!formInputsValidity.street && (
          <p>Please select a valid option for the street!</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Branch</label>
        <select id="postal" ref={postalCodeInputRef}>
          <option value="Dunoon">Dunoon</option>
          <option value="Paarl">Paarl</option>
          <option value="Mfuleni">Mfuleni</option>
          <option value="Caprocon">Caprocon</option>
        </select>
        {!formInputsValidity.postalCode && <p>Please select a valid branch!</p>}
      </div>

      <div className={classes.actions}>
        <button
          type="button"
          className={classes.cancelButten}
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className={classes.submitbutton}>Confirm</button>
      </div>
    </form>
  );
};

export default MemberForm;
