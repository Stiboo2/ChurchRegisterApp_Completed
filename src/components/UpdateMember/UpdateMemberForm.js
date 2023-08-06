import React, { useState } from "react";

const UpdateMemberForm = ({ data, onUpdate }) => {
  const [title, setTitle] = useState(data.title);
  const [surname, setSurname] = useState(data.surname);
  const [cell, setCell] = useState(data.cell);
  const [idNumber, setTdNumber] = useState(data.idNumber);
  const [img, setImg] = useState(data.img);
  const [branch, setbranch] = useState(data.branch);
  const [amount, setAmount] = useState(data.amount);
  const [Active, setActive] = useState(data.Active);
  const [sealed, setSealed] = useState(data.sealed);
  const [Birthday, setBirthday] = useState(data.Birthday);
  const [serviceYears, setServiceYears] = useState(data.serviceYears);
  const [HomePlace, setHomePlace] = useState(data.HomePlace);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the updated data
    const updatedData = {
      ...data,
      title,
      surname,
      cell,
      idNumber,
      img,
      branch,
      amount,
      Active,
      sealed,
      Birthday,
      serviceYears,
      HomePlace,
    };
    onUpdate(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={Active}
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
          value={Birthday}
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
          value={HomePlace}
          onChange={(e) => setHomePlace(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateMemberForm;
