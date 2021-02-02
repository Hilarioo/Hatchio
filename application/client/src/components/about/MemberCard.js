import React from 'react'
import '../../css/About.css'

function MemberCard({member}) {
    return (
        <div className="member-box">
              <img src={member.img} alt='selfie' className="member-img"/>
              <h1 className="member-name">{member.fullname}</h1>
              <h4 className="member-role">{member.role}</h4>
        </div>
    )
}

export default MemberCard
