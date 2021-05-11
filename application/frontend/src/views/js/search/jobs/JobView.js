// React
import { useEffect, useState } from "react";
//Cookie
import { useCookies } from "react-cookie";
// React Boostrap
import Button from "react-bootstrap/Button";
import Arrow from "../../../content/svg/arrow.svg";
// CSS
import "../../../css/Theme.css";
import "../../../css/Profiles.css";
// Default Image
import { defaultImage } from "../../global/DefaultImage";
//Import SVG Icons
import LocationIcon from "../../../content/svg/location-icon.svg";

import Popup from "reactjs-popup";

//API
import API_JOB_LISTING_VIEW from "../../../../models/GET/Jobs/job_view";
import API_INSERT_STUDENT_APPLICATION from "../../../../models/POST/Students/insert_student_apply";
const JobView = ({
  location: {
    state: { Listing_ID },
  },
}) => {
  const [dbJob, setdbJob] = useState([{}]);
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await API_JOB_LISTING_VIEW(setdbJob, Listing_ID);
      console.log(dbJob[0].benefits);
    }

    fetchMyAPI();
  }, []);

  const Apply_Job = async (Student_ID) => {
    const response = await API_INSERT_STUDENT_APPLICATION({
      student_id: ` ${Student_ID}`,
      employer_id: `${dbJob[0].employer_id}`,
      listing_id: `${Listing_ID}`,
    });
    if (response === 200) {
      console.log("application success");
    }
    if (response === 400) {
      console.log("application error");
    }
  };

  return (
    <div>
      {/* heading */}
      <div className="student-heading">
        {/* Back Button */}
        <div
          className="back-btn"
          onClick={(e) => {
            window.location = "/search-jobs";
            e.preventDefault();
          }}
        >
          <img src={Arrow} alt="back arrow" />
        </div>
        {/* creates default image if none provided */}
        <img src={defaultImage(String(dbJob[0].organization_name))} alt={dbJob[0].organization_name} />
        <div className="right">
          {/* Student Name */}
          <h4>{dbJob[0].position_title}</h4>

          <div className="flex-box">
            {/* Student Location */}
            <div className="flex-box">
              <img src={LocationIcon} alt="location pin" />
              <p>{dbJob[0].location}</p>
            </div>
          </div>
          <div className="flex-box">
            {cookie.Type_User != "student" ? (
              <Popup trigger={<Button> Apply</Button>}>
                <div>Log In As Student</div>
              </Popup>
            ) : (
              <Button onClick={() => Apply_Job(cookie.ID_OF_USER)}>Apply</Button>
            )}
          </div>
        </div>
      </div>

      <div className="center">
        {/* Top Qualities */}
        <div className="student-qualities">
          <div className="flex-box">
            <h4>Position Details</h4>
          </div>
          <li>
            <ul>{dbJob[0].job_type}</ul>
            <ul>{dbJob[0].experience_level}</ul>
            <ul>{dbJob[0].experience_years}</ul>
            <ul>$ {dbJob[0].salary} / yr</ul>
          </li>
        </div>

        {/* Company About Me */}
        <div className="student-about">
          <div className="flex-box">
            <h4>About {dbJob[0].organization_name}</h4>
          </div>
          {/* About Me */}
          <p>{dbJob[0].about_us}</p>
        </div>

        {/* Company The Opportunity */}
        <div className="student-about">
          <div className="flex-box">
            <h4>The Opportunity</h4>
          </div>
          {/* About Me */}
          <p>{dbJob[0].the_opportunity}</p>
        </div>

        <div className="student-about flex-box skillset-benefits">
          <div className="skillset">
            <h4>Skillset Needed</h4>
            <ul>
              {String(dbJob[0].skillset)
                .split(",")
                .map((skill) => (
                  <li>{skill}</li>
                ))}
            </ul>
          </div>

          <div className="benefits">
            <h4>Our Benefits</h4>
            <ul>
              {String(dbJob[0].benefits)
                .split(",")
                .map((benefit) => (
                  <li>{benefit}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobView;
