import React from 'react'

function MemberPage({member}) {
    return (
        <div>
            <h1>{member.fullname}</h1>
            <h4>{member.role}</h4>
            <img src={member.img} alt="selfie"/>
            <p>{member.desc}</p>

        </div>
    )
}

export default MemberPage
