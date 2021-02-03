import React from 'react'
import '../../css/About.css'

const MemberPage = ({location}) => {

    return (
        <div className="member-box">
              <img src={location.state.img} className="member-img"/>
              <h1 className="member-name">{location.state.fullname}</h1>
              <h4 className="member-role">{location.state.role}</h4>
              <p className="member-desc">{location.state.desc}</p>
        </div>
    )
}

export default MemberPage
