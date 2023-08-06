import classes from "./MemberItem.module.css";
import Card from "../MemberCard/Card";
import ExpenseDate from "../../Meals/MealItem/ExpenseDate";
/* import classes from "./MealItem.module.css"; */
import { useGlobalContext } from "../../../store/context";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MemberItem = (props) => {
  const { remove, increase, decrease, insetData, updateAttendanceRecord } =
    useGlobalContext();

  return (
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseDate img={props.img} />
        <div className={classes["expense-item__description"]}>
          <div className={classes["discription"]}>
            <div>Title: {props.title}</div>
            <div>Surname: {props.surname}</div>
            <div className={classes.price}>Branch: {props.branch}</div>
          </div>
          <div className={classes["discription"]}>
            <div>Cell: {props.cell}</div>
            <div>ID: {props.idNumber}</div>
            <div className={classes.price}>Birthday: {props.Birthday}</div>
          </div>
          <div className={classes["discription"]}>
            <div>Active: {props.Active ? "Yes" : "No"}</div>
            <div>Sealed: {props.sealed ? "Yes" : "No"}</div>
            <div className={classes.price}>
              Year/s of Service: {props.serviceYears}
            </div>
          </div>
          <div className={classes["button_ud"]}>
            <Link
              className={classes["expense-item__pressent"]}
              to={`/updateMember/ ${props.id}`}
            >
              Edit
            </Link>
            <Link className={classes["expense-item__absent"]} to="/">
              Delete
            </Link>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MemberItem;
