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

  if (cookie.Type_User === `student`) {
    return (
      <div className='card-result'>
        <header>
          <img
            src={image.length <= 0 ? defaultImage(CompanyName) : image}
            alt={CompanyName.charAt(0)}
          />
          <div className='info'>
            <div className='name-enrollment'>
              <h4 style={{ paddingBottom: "10px" }}>{PositionTitle}</h4>
            </div>

            <div className='flex-box'>
              <h6 style={{ marginRight: "0.5rem" }}>{CompanyName}</h6>
              <p id='enrollment' style={{ marginTop: "-.2rem" }}>
                {JobType}
              </p>
              <p id='salary'>${String(Income).slice(0, -3)}k / yr</p>
            </div>
            <div className='flext-box' style={{ marginTop: "-.7rem" }}>
              <img src={LocationIcon} alt='location pin' id='location' />
              <span>{Location}</span>
            </div>
          </div>
        </header>
        <div className='flex-box'>
          <Button onClick={() => Redirect_Job_View(Listing_ID)}>View</Button>
          <Popup trigger={<Button>Apply</Button>}>
            <p>Sent!(Aaron working on) </p>
          </Popup>
        </div>
      </div>
    );
  }
  return (
    <div className='card-result'>
      <img src={circle} alt='' />
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
