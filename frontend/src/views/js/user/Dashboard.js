import "../../css/Help.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import API_USER_GET_PROFILE from "../../../models/user_profile";
const Dashboard = () => {
  useEffect(() => {
    setuserProfile(API_USER_GET_PROFILE(cookie.Type_User, cookie.ID_OF_USER));
  }, []);
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);
  const [userProfile, setuserProfile] = useState([]);

  const USER_PROFILE_LOG = () => {
    console.log(userProfile);
  };

  if (
    (cookie.Type_User === "professor") |
    (cookie.Type_User === "student") |
    (cookie.Type_User === "employer")
  ) {
    return (
      <div>
        <h1 className="mini-title">Welcome back, {cookie.First_Name} </h1>
        <h1 className="short-par">You're a {cookie.Type_User} </h1>
        <button onClick={USER_PROFILE_LOG}>Click to Console Log</button>

        <h3>@Jose</h3>
        <p>
          Console Log <b>[Student Information]</b> Student Education, Student
          Ratings, Student Projects, Student Profile
        </p>
        <p>
          Console Log <b>[Employer Information]</b>: Employer Listed Jobs
        </p>
        <p>
          Console Log <b>[Professor Information]</b> Professor No Information
          Other than Sign Up page for right now
        </p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="mini-title">Refresh page or Sign in </h1>
    </div>
  );
};

export default Dashboard;
