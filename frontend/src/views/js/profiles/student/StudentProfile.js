import "../../../css/Profiles.css";

const StudentProfile = () => {
  return (
    <>
      {/* heading */}
      <div className='student-heading'>
        <img src='' alt='' />
        <div className='right'>
          <h1>Name</h1>
          <p>location</p>
          <button>message</button>
          <button>reflection</button>
        </div>
      </div>
      {/* links */}
      <div className='student-links'>
        <img src='' alt='website url' />
        <img src='' alt='linkedin' />
        <img src='' alt='resume-pdf' />
      </div>
      {/* about */}
      <h3>About</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius gravida
        lacus, tellus amet, pretium, proin. Montes, nam erat phasellus eget
        pellentesque vel condimentum. Hendrerit egestas in egestas euismod
        egestas. Nisl nibh nulla tristique nec nisi.
      </p>
      {/* qualities */}
      <h3>Top Qualities</h3>
      <li>
        <ul>one</ul>
      </li>
      {/* projects */}
      <h3>Projects</h3>
      <div className='student-project'>
        <img src='' alt='project img' />
        <div className='right'>
          <p>date</p>
          <h5>project name</h5>
          <h6>author(s): </h6>
          <h6>Professor: </h6>
          <li>
            <ul>one</ul>
          </li>
        </div>
      </div>
      {/* education */}
      <h3>Education</h3>
      <div className='student-education'>
        <img src='' alt='education img' />
        <div className='right'>
          <h5>degree title</h5>
          <h6>school </h6>
          <p>date </p>
        </div>
      </div>
      {/* experience */}
      <h3>Experience</h3>
      <div className='student-experience'>
        <img src='' alt='experience img' />
        <div className='right'>
          <h5>job title</h5>
          <h6>company </h6>
          <p>date </p>
          <li>
            <ul>one</ul>
          </li>
        </div>
      </div>
      {/* reflection */}
      <h3>Reflection</h3>
      <div className='review-heading'>
        <p>score</p>
        <p>user</p>
        <p>date</p>
      </div>
      <h6>school</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius gravida
        lacus, tellus amet, pretium, proin. Montes, nam erat phasellus eget
      </p>
      <li>
        <ul>one</ul>
      </li>
    </>
  );
};

export default StudentProfile;
