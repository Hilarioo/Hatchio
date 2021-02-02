import {useState} from 'react'
import MemberCard from './MemberCard'
import '../../css/About.css'
import JoseSelfie from '../../images/Joses-Selfie.JPG'

function About() {

    const [members, SetMembers] = useState([
        {
            id: 0,
            fullname: "Full Name",
            role: "My Role",
            //img: MySelfie
        },
        {
            id: 1,
            fullname: "Jose Gonzalez",
            role: "Front End Lead",
            desc: "Quisque sollicitudin purus consequat nibh lacinia tempor. Duis id ante et libero tempus sollicitudin. Curabitur tortor lacus, tempor posuere quam a, blandit consequat sapien. In at ornare ante. Sed ultrices felis purus, at consequat libero pharetra sit amet. ",
            img: JoseSelfie
        },
        {
            id: 2,
            fullname: "Full Name",
            role: "My Role",
            desc: "",
            // img: MySelfie
        },
        {
            id: 3,
            fullname: "Full Name",
            role: "My Role",
            desc: "",
            // img: MySelfie
        },
        {
            id: 4,
            fullname: "Full Name",
            role: "My Role",
            desc: "",
            // img: MySelfie
        },
        {
            id: 5,
            fullname: "Full Name",
            role: "My Role",
            desc: "",
            // img: MySelfie
        },
    ])


    return (
        <div className="about-box">
            {members?.map((member) => (
                < MemberCard  key={member.id} member={member}/>
            ))}
        </div>
    )
}

export default About
