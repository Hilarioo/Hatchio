
import '../../css/About.css'

const MemberCard = ({member}) => {
    return (
        <div className="member-box">
              <img src={member.img} className="member-img"/>
              <h1 className="member-name">{member.fullname}</h1>
              <h4 className="member-role">{member.role}</h4>
        </div>
    )
}

export default MemberCard
