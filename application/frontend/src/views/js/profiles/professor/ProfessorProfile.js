/**
 * File: ProfessorProfile.js
 * Purpose | Functionality: Profile Page from Dashboard js
 * Authors: Jose(Format & Structure) | Aaron(Insert in Format)
 */
import { useEffect, useState } from "react";

const ProfessorProfile = (props) => {
  const [profileState, setProfileState] = useState({
    null: "null",
  });
  useEffect(() => {
    console.log("proppy", props[0]);
    setProfileState(props[0]); //General Information
  }, [props]);

  return (
    <div>
      <h3>
        Your are a professor. You can now rate students under search/students
      </h3>
      <h5>First Name : {profileState.first_name}</h5>
      <h5>Last Name : {profileState.last_name}</h5>
      <h5>Email : {profileState.email}</h5>
      <h5>School : {profileState.school_name}</h5>
    </div>
  );
};

export default ProfessorProfile;
