import { useState } from "react";
import { useHistory } from "react-router-dom";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Image(s) or SVG
import circle from "../../../content/svg/demo-card-profile.svg";
// React Boostrap
import Button from "react-bootstrap/Button";
//Popop Form
import Popup from "reactjs-popup";
//Cookie
import { useCookies } from "react-cookie";
const JobCard = ({
  Listing_ID = 0,
  PositionTitle = "",
  CompanyName = "",
  Income = 0,
  AboutUs = "",
  JobType = "",
}) => {
  const history = useHistory();
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User
  const Redirect_Job_View = (Listing_ID) => {
    console.log(`Listing ID: ${Listing_ID}`);
    history.push({
      pathname: "/full-job-view",
      Listing_id: Listing_ID,
    });
  };

  if (cookie.Type_User === `student`) {
    return (
      <div className="job-card">
        <img src={circle} alt="" />
        <h4>
          <b>Position Title:</b> {PositionTitle}
        </h4>
        <p>
          <b>Company Name:</b> {CompanyName}
        </p>
        <p>
          <b>Income:</b> {Income}
        </p>
        <p>
          <b>Job Type:</b> {JobType}
        </p>
        <p>
          <b>About Us:</b> {AboutUs}
        </p>
        <Button onClick={() => Redirect_Job_View(Listing_ID)}>View</Button>
        <Popup trigger={<Button>Apply</Button>}>
          <p>Sent!(Aaron working on) </p>
        </Popup>
      </div>
    );
  }
  return (
    <div className="job-card">
      <img src={circle} alt="" />
      <h4>
        <b>Position Title:</b> {PositionTitle}
      </h4>
      <p>
        <b>Company Name:</b> {CompanyName}
      </p>
      <p>
        <b>Income:</b> {Income}
      </p>
      <p>
        <b>Job Type:</b> {JobType}
      </p>
      <p>
        <b>About Us:</b> {AboutUs}
      </p>
      <Button onClick={() => Redirect_Job_View(Listing_ID)}>View</Button>
      <Popup trigger={<Button>Apply</Button>}>
        <p>Sign In as a student! </p>
      </Popup>
    </div>
  );
};

export default JobCard;
