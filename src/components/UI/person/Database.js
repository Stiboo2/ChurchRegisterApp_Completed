import ShowAllMembers from "../ShowAllMembers";
import { useGlobalContext } from "../../../store/context";
import { useState } from "react";

const Database = () => {
  const [sendReports, setSendReports] = useState(false);

  const { cart } = useGlobalContext();
  const memberS = Array.from(cart.entries()).map(([id, item]) => ({
    id,
    ...item,
  }));
  const toggloSendReportsHandler = () => {
    setSendReports(!sendReports);
  };
  return (
    <div>
      <div>
        {
          <button className={classes.buttonAdd} onClick={MemberHandler}>
            Add New Member
          </button>
        }
      </div>
      {!sendReports && <ShowAllMembers tableData={memberS} />}
    </div>
  );
};
export default Database;
