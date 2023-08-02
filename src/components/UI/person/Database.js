import ShowAllMembers from "../ShowAllMembers";
import { useGlobalContext } from "../../../store/context";
import { useState } from "react";
import classes from "./Database.module.css";
import AllMember from "./AllMember";

const Database = () => {
  const [showAllMember, setShowAllMember] = useState(false);
  const { cart } = useGlobalContext();
  const memberS = Array.from(cart.entries()).map(([id, item]) => ({
    id,
    ...item,
  }));
  const toggleMemberTableHandler = () => {
    setShowAllMember(!showAllMember);
  };
  const EditMemberHandler = () => {};

  return (
    <div>
      <div>
        {
          <button
            className={classes.buttonAdd}
            onClick={toggleMemberTableHandler}
          >
            Show All Members
          </button>
        }
      </div>
      {showAllMember && <ShowAllMembers tableData={memberS} />}
      {!showAllMember && <AllMember />}
    </div>
  );
};
export default Database;
