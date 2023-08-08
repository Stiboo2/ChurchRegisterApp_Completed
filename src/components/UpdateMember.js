import React, { useState } from "react";
import UpdateMemberForm from "./UpdateMember/UpdateMemberForm";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../store/context";

const UpdateMember = () => {
  const { cart, editmember } = useGlobalContext();
  const { id } = useParams();
  const memberS = Array.from(cart.entries()).map(([id, item]) => ({
    id,
    ...item,
  }));
  const memberIdToSearch = id.trim();
  const memberToFind = memberS.find((member) => member.id === memberIdToSearch); // Fixed the arrow function

  if (memberToFind) {
    console.log("Found member:");
    console.log(memberToFind);
  } else {
    console.log("Member not found!");
  }

  const [data, setData] = useState(memberToFind);
  const handleUpdate = (updatedData) => {
    // Here, you can handle the update operation using the updatedData object
    // For example, you might want to send the updatedData to an API to update the database

    // For this example, I'm simply updating the state with the new data
    editmember(updatedData);
  };
  return (
    <>
      <UpdateMemberForm data={data} onUpdate={handleUpdate} />
    </>
  );
};

export default UpdateMember;
