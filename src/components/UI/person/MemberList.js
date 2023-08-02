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
        return (
          <MemberItem
            key={id}
            id={id}
            title={member.title}
            surname={member.surname}
            branch={member.branch}
            img={member.img}
          />
        );
      })}
    </ul>
  );
};
export default MemberList;
