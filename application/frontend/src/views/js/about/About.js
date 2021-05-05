/*
 * File: About.js
 * Functionality: Lets People know about us
 * Author: Jose (Component & Structure)
 */

import { useState } from "react";
import { useHistory } from "react-router-dom";
import MemberCard from "./MemberCard";
import "../../css/About.css";
import { Link } from "react-router-dom";

// Selfies
import JoseSelfie from "../../content/images/Joses-Selfie.JPG";
import AaronSelfie from "../../content/images/aaron-pic.jpg";
import LyraSelfie from "../../content/images/Lyra.jpg";
import RolandSelfie from "../../content/images/Roland.JPG";

const About = () => {
  const [members, setMembers] = useState([
    {
      id: 0,
      fullname: "Lyra Solomon",
      role: "Design Lead",
      desc:
        "I am a computer science major and philosophy minor at San Francisco State University. I firmly believe in accessibility, transparency, and justice. In my free time, I enjoy listening to music and making food for my friends.",
      img: LyraSelfie,
    },
    {
      id: 1,
      fullname: "Jose Gonzalez",
      role: "Front End Lead",
      desc:
        "Hey! I have recently become a San Francisco Gator! I transitioned to SFSU from Los Medanos Community College. I will be graduating Spring 2021 with a Bachelor of Science. I am full of random facts that have no purpose other than bringing them up during conversations.",
      img: JoseSelfie,
    },
    {
      id: 2,
      fullname: "Aaron Singh",
      role: "Backend Lead",
      desc:
        "Hi, my name is Aaron! I'm in my junior year of school studying cs. I really like javascript because application logic and visual components are linked so it makes intuitive sense while being fun!",
      img: AaronSelfie,
    },
    {
      id: 3,
      fullname: "Roland Lee",
      role: "Team Lead/Github Master",
      desc:
        "Nice to meet you, my name is Roland. This will be my last semester at SFSU. Besides this project, I'm currently working on my first mobile application and Unity game using C#.",
      img: RolandSelfie,
    },
  ]);

  //Redirect
  const history = useHistory();
  const redirect = (key) => {
    history.push(`about/member/${members[key].fullname}`, {
      members,
    });
  };

  return (
    <div>
      <h1 className='mini-title'>About Us</h1>
      <div className='about-box'>
        <div className='center-flex'>
          {members.map((member) => (
            <MemberCard
              member={member}
              key={member.id}
              onClick={redirect(member.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
