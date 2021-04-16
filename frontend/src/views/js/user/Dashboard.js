import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
// CSS
import "../../css/Help.css";
// Profile Components
import StudentProfile from "../profiles/student/StudentProfile";
import ProfessorProfile from "../profiles/professor/ProfessorProfile";
import CompanyProfile from "../profiles/company/CompanyProfile";

import API_USER_GET_PROFILE from "../../../models/user_profile";
const Dashboard = () => {
  useEffect(() => {
    setuserProfile(API_USER_GET_PROFILE(cookie.Type_User, cookie.ID_OF_USER));
  }, []);
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use
  const [userProfile, setuserProfile] = useState([]);

  const USER_PROFILE_LOG = () => {
    console.log(userProfile);
  };

  if (cookie.Type_User === "student") {
    return (
      <>
        <StudentProfile />
        {/* for debugging purposes */}
        <button onClick={USER_PROFILE_LOG}>Click to Console Log</button>{" "}
      </>
    );
  } else if (cookie.Type_User === "professor") {
    return (
      <>
        <ProfessorProfile />
        {/* for debugging purposes */}
        <button onClick={USER_PROFILE_LOG}>Click to Console Log</button>{" "}
      </>
    );
  } else if (cookie.Type_User === "company") {
    return (
      <>
        <CompanyProfile />
        {/* for debugging purposes */}
        <button onClick={USER_PROFILE_LOG}>Click to Console Log</button>{" "}
      </>
    );
  }
  return (
    <div>
      ``
      <h1 className="mini-title">Refresh page or Sign in </h1>
    </div>
  );
};

export default Dashboard;
