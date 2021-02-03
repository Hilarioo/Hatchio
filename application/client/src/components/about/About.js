import {useState} from 'react'
import MemberCard from './MemberCard'
import '../../css/About.css'
import JoseSelfie from '../../images/Joses-Selfie.JPG'
import { Link } from 'react-router-dom'

const About = () => {

    const [members, SetMembers] = useState([
        {
            id: 0,
            fullname: "Full Name",
            role: "My Role",
            desc: "My Short Description Goes Here",
            //img: MySelfie
        },
        {
            id: 1,
            fullname: "Jose Gonzalez",
            role: "Front End Lead",
            desc: "Hey! I have recently become a San Francisco Gator! I transitioned to SFSU from Los Medanos Community College. I will be graduating Spring 2021 with a Bachelor of Science. I am full of random facts that have no purpose other than bringing them up during conversations.",
            img: JoseSelfie
        },
        {
            id: 2,
            fullname: "Full Name",
            role: "My Role",
            desc: "My Short Description Goes Here",
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
        {
            id: 5,
            fullname: "Full Name",
            role: "My Role",
            desc: "My Short Description Goes Here",
            // img: MySelfie
        },
    ])


    return (
        <div className="about-box">
            {members.map((member) => (
                <Link key={member.id} to={{
                    pathname: `about/member/${member.fullname}`,
                    state: {
                      fullname: member.fullname,
                      role: member.role,
                      desc: member.desc,
                      img: member.img
                    }
                  }} className="link">
                    < MemberCard member={member}/>
                </Link>
            ))}
        </div>
    )
}

export default About
