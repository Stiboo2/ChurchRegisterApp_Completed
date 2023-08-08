import React, { useEffect } from "react";
import classes from "./Calculated.module.css";

const Calculated = ({
  sealedFalseCount,
  CountMembers,
  branchCounts,
  titleCounts,
}) => {
  useEffect(() => {
    console.log(
      "Number of members with sealed=false:",
      sealedFalseCount,
      CountMembers
    );
    console.log("Branch Counts:", branchCounts);
    console.log("Branch Title:", titleCounts);
  }, []);

  return (
    <div className={classes.calculatedCard}>
      <p>
        Number of members with sealed=false: {sealedFalseCount}, {CountMembers}
      </p>
      <p>Branch Counts: {JSON.stringify(branchCounts)}</p>
      <p>Branch Title: {JSON.stringify(titleCounts)}</p>
    </div>
  );
};

export default Calculated;
