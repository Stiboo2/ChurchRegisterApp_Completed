import classes from "./MemberItem.module.css";
import Card from "../MemberCard/Card";
import ExpenseDate from "../../Meals/MealItem/ExpenseDate";
/* import classes from "./MealItem.module.css"; */
import { useGlobalContext } from "../../../store/context";
import { useEffect } from "react";

const MemberItem = (props) => {
  const { remove, increase, decrease, insetData, updateAttendanceRecord } =
    useGlobalContext();

  return (
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseDate img={props.img} />
        <div className={classes["expense-item__description"]}>
          <div className={classes["discription"]}>
            <div>{props.title}</div>
            <h3>{props.surname}</h3>
            <div className={classes.price}>{props.branch}</div>
          </div>
          <div className={classes["button_ud"]}>
            <button
              className={classes["expense-item__pressent"]}
              onClick={"increaseHandler"}
            >
              Edit
            </button>
            <button
              className={classes["expense-item__absent"]}
              onClick={"decreaseHandler"}
            >
              Delete
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MemberItem;
