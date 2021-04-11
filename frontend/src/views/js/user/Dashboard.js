import "../../css/Help.css";
import { useState } from "react";
import { useCookies } from "react-cookie";

import API_USER_GET_PROFILE from "../../../models/user_profile";
const Dashboard = () => {
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use
  const [userProfile, setuserProfile] = useState([]);

  //Shouldnt be in useEffect because of async ?
  const FETCH_USER_INFO = async () => {
    await API_USER_GET_PROFILE(
      setuserProfile,
      cookie.Type_User,
      cookie.ID_OF_USER
    );
    console.log(userProfile);
  };

  if ((cookie.First_Name === "undefined") | (cookie.First_Name === "null")) {
    return (
      <div>
        <h1 className="mini-title">Sign In or Refresh the Page </h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="mini-title">Welcome back, {cookie.First_Name} </h1>
      <h1 className="short-par">You're a {cookie.Type_User} </h1>
      <p>Check the console.log for your information</p>
      <button onClick={FETCH_USER_INFO}>Get User Info</button>
    </div>
  );
};

export default Dashboard;
