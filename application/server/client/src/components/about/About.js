import { useState } from "react";
import MemberCard from "./MemberCard";
import "../../css/About.css";
import JoseSelfie from "../../images/Joses-Selfie.JPG";
import AaronSelfie from "../../images/aaron-pic.jpg";
import LyraSelfie from "../../images/Lyra.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const [members, SetMembers] = useState([
    {
      id: 0,
      fullname: "Lyra Solomon",
      role: "Design Lead",
      desc: "I am a computer science major and philosophy minor at San Francisco State University. I firmly believe in accessibility, transparency, and justice. In my free time, I enjoy listening to music and making food for my friends.",
      img: LyraSelfie
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
      role: "Database Manager",
      desc:
        "Hi, my name is Aaron! I'm in my junior year of school studying cs. I really like javascript because application logic and visual components are linked so it makes intuitive sense while being fun!",
      img: AaronSelfie,
      // img: MySelfie
    },
    {
      id: 3,
      fullname: "Full Name",
      role: "My Role",
      desc: "My Short Description Goes Here",
      // img: MySelfie
    },
    {
      id: 4,
      fullname: "Full Name",
      role: "My Role",
      desc: "My Short Description Goes Here",
      // img: MySelfie
    },
  ]);

  return (
    <div>
      <h1 className="mini-title">About Us</h1>
      <div className="about-box">
        <div className="center-flex">
          {members.map((member) => (
            <Link
              key={member.id}
              to={{
                pathname: `about/member/${member.fullname}`,
                state: member,
              }}
              className="link"
            >
              <MemberCard member={member} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
