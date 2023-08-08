import ActiveMembers from "./ActiveMembers";
import Calculated from "./Calculated";
import classes from "./AllMember.module.css";
const AllMember = ({ showNewMember }) => {
  return (
    <div className={classes.MemberCalculated}>
      <Calculated></Calculated>
      <ActiveMembers showNewMember={showNewMember} />
    </div>
  );
};
export default AllMember;
