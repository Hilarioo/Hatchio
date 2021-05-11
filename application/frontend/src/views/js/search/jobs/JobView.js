// React
import { useEffect, useState } from "react";
// React Boostrap
import Button from "react-bootstrap/Button";
// CSS
import "../../../css/Theme.css";
import "../../../css/Profiles.css";
// Default Image
import { defaultImage } from "../../global/DefaultImage";
//Import SVG Icons
import LocationIcon from "../../../content/svg/location-icon.svg";

//API
import API_JOB_LISTING_VIEW from "../../../../models/GET/Jobs/job_view";
const JobView = ({
  location: {
    state: { Listing_ID },
  },
}) => {
  const [dbJob, setdbJob] = useState([{}]);
  const [benefits, setBenefits] = useState([]);
  const [skillset, setSkillset] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await API_JOB_LISTING_VIEW(setdbJob, Listing_ID).then(
        setBenefits(dbJob[0].benefits)
      );

      console.log(dbJob[0].benefits);
    }

    fetchMyAPI();
    splitStr();
  }, []);

  const splitStr = () => {
    console.log(dbJob);
    setBenefits(dbJob[0].organization_name);
    setSkillset(String(dbJob[0].skillset).split(","));
  };

  return (
    <div>
      {/* heading */}
      <div className='student-heading'>
        {/* creates default image if none provided */}
        <img
          src={defaultImage(String(dbJob[0].organization_name))}
          alt={dbJob[0].organization_name}
        />
        <div className='right'>
          {/* Student Name */}
          <h4>{dbJob[0].position_title}</h4>

          <p>{dbJob[0].organization_name}</p>

          {/* Student Location */}
          <div className='flex-box'>
            <img src={LocationIcon} alt='location pin' />
            <p>{dbJob[0].location}</p>
          </div>
        </div>
      </div>

      <div className='center'>
        {/* Top Qualities */}
        <div className='student-qualities'>
          <div className='flex-box'>
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
        <div className='student-about'>
          <div className='flex-box'>
            <h4>About Me</h4>
          </div>
          {/* About Me */}
          <p>{dbJob[0].about_us}</p>
        </div>

        {/* Company The Opportunity */}
        <div className='student-about'>
          <div className='flex-box'>
            <h4>The Opportunity</h4>
          </div>
          {/* About Me */}
          <p>{dbJob[0].the_opportunity}</p>
        </div>

        <div className='student-about flex-box skillset-benefits'>
          <div className='skillset'>
            <h4>Skillset Needed</h4>
            <ul>
              {String(dbJob[0].skillset)
                .split(",")
                .map((skill) => (
                  <li>{skill}</li>
                ))}
            </ul>
          </div>

          <div className='benefits'>
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
