/*
 * File: JobCard.js
 * Functionality: Creates Card Component for jobs available within results
 * Author: Jose
 */

import { useHistory } from "react-router-dom";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Import SVG Icons
import LocationIcon from "../../../content/svg/location-icon.svg";
// Default Image (if user has no image)
import { defaultImage } from "../../global/DefaultImage";
// Image(s) or SVG
import circle from "../../../content/svg/demo-card-profile.svg";
// React Boostrap
import Button from "react-bootstrap/Button";
//Popop Form
import Popup from "reactjs-popup";
//Cookie
import { useCookies } from "react-cookie";
const JobCard = ({
  image = "",
  Listing_ID = 0,
  PositionTitle = "",
  CompanyName = "",
  Income = 0,
  AboutUs = "",
  JobType = "",
  Location = "",
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
  const Apply_Job = (Listing_ID, Student_ID) => {
    console.log("Student ID of logged in user");
    console.log("Listing Id of Selected Card");
  };
  const loger = () => {
    console.log("something logg");
  };

  return (
    <div className="card-result">
      <header>
        <img
          src={image.length <= 0 ? defaultImage(CompanyName) : image}
          alt={CompanyName.charAt(0)}
        />
        <div className="info">
          <div className="name-enrollment">
            <h4 style={{ paddingBottom: "10px" }}>{PositionTitle}</h4>
          </div>

          <div className="flex-box">
            <h6 style={{ marginRight: "0.5rem" }}>{CompanyName}</h6>
            <p id="enrollment" style={{ marginTop: "-.2rem" }}>
              {JobType}
            </p>
            <p id="salary">${String(Income).slice(0, -3)}k / yr</p>
          </div>
          <div className="flext-box" style={{ marginTop: "-.7rem" }}>
            <img src={LocationIcon} alt="location pin" id="location" />
            <span>{Location}</span>
          </div>
        </div>
      </header>
      <div className="flex-box">
        <Button onClick={() => Redirect_Job_View(Listing_ID)}>View</Button>
        {/*
        <Button onClick={() => Apply_Job(Listing_ID, cookie.ID_OF_USER)}>
          Apply_V2
        </Button>
          */}
        <Popup trigger={<Button onClick={() => loger()}>Apply</Button>}>
          {cookie.Type_User === "student" ? (
            <p> Sent!(Aaron working on) </p>
          ) : (
            <p> Sign In to apply! </p>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default JobCard;
