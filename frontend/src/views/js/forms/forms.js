import { useState } from "react";
import { Link } from "react-router-dom";
// Redirect After Clicking "Create Account"
import { useHistory } from "react-router-dom";
// React Bootstrap
import Button from "react-bootstrap/Button";
// Components
import List from "./List";
import Description from "./Description";
import Education from "./Education";
import Experience from "./Experience";
import Job from "./Job";
import Project from "./Project";
import School from "./School";
import LinksCompany from "./LinksCompany";
import LinksProfessor from "./LinksProfessor";
import LinksStudent from "./LinksStudent";

const Forms = () => {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const [modalShow7, setModalShow7] = useState(false);
  const [modalShow8, setModalShow8] = useState(false);
  const [modalShow9, setModalShow9] = useState(false);
  const [modalShow10, setModalShow10] = useState(false);

  //Redirect with useHistory
  const history = useHistory();

  const routeChange = () => {
    history.push("/welcome-student-form");
  };

  return (
    <div>
      <h1>Pop Up Forms</h1>
      {/* Benefits / Qualities */}
      <Button variant='primary' onClick={() => setModalShow1(true)}>
        List
      </Button>
      <List show={modalShow1} onHide={() => setModalShow1(false)} />
      {/* Description */}
      <Button variant='primary' onClick={() => setModalShow2(true)}>
        Description
      </Button>
      <Description show={modalShow2} onHide={() => setModalShow2(false)} />
      {/* Education */}
      <Button variant='primary' onClick={() => setModalShow3(true)}>
        Education
      </Button>
      <Education show={modalShow3} onHide={() => setModalShow3(false)} />
      {/* Esperience */}
      <Button variant='primary' onClick={() => setModalShow4(true)}>
        Experience
      </Button>
      <Experience show={modalShow4} onHide={() => setModalShow4(false)} />
      {/* Job */}
      <Button variant='primary' onClick={() => setModalShow5(true)}>
        Job
      </Button>
      <Job show={modalShow5} onHide={() => setModalShow5(false)} />
      {/* Student Links */}
      <Button variant='primary' onClick={() => setModalShow6(true)}>
        Student Links
      </Button>
      <LinksStudent show={modalShow6} onHide={() => setModalShow6(false)} />
      {/* Professor Links */}
      <Button variant='primary' onClick={() => setModalShow9(true)}>
        Professor Links
      </Button>
      <LinksProfessor show={modalShow9} onHide={() => setModalShow9(false)} />
      {/* Company Links */}
      <Button variant='primary' onClick={() => setModalShow10(true)}>
        Company Links
      </Button>
      <LinksCompany show={modalShow10} onHide={() => setModalShow10(false)} />
      {/* Project */}
      <Button variant='primary' onClick={() => setModalShow7(true)}>
        Project
      </Button>
      <Project show={modalShow7} onHide={() => setModalShow7(false)} />
      {/* School */}
      <Button variant='primary' onClick={() => setModalShow8(true)}>
        School
      </Button>
      <School show={modalShow8} onHide={() => setModalShow8(false)} />

      {/* First Time User Forms */}
      <h1>First Time User Forms</h1>
      {/* First Time Student */}
      <Button
        variant='dark'
        type='submit'
        id='redirect-btn'
        onClick={routeChange}>
        First Time Student Form
      </Button>
    </div>
  );
};

export default Forms;
