import React from "react";
import { useGlobalContext } from "../../../store/context";
import MemberItem from "./MemberItem";
import classes from "./MemberList.module.css";
const MemberList = () => {
  const { cart } = useGlobalContext();
  const members = Array.from(cart.entries());

  return (
    <ul className={classes["expenses-list"]}>
      {members.map((memberCombo) => {
        const [id, member] = memberCombo;
        if (member.Active !== true) {
          return null; // Skip rendering the CartItem component
        }

        return (
          <MemberItem
            key={id}
            id={id}
            title={member.title}
            surname={member.surname}
            branch={member.branch}
            img={member.img}
            cell={member.cell}
            idNumber={member.idNumber}
            serviceYears={member.serviceYears}
            Birthday={member.Birthday}
            Active={member.Active}
            sealed={member.sealed}
          />
        );
      })}
    </ul>
  );
};
export default MemberList;
