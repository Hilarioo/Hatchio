import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../css/Nav.css";
// Image(s) or SVG
import { ReactComponent as Logo } from "../../content/svg/logo.svg";
// Components
import Home from "../home/Home";
import VPHome from "../home/VPHome";
import About from "../about/About";
import Help from "../help/Help";
import Member from "../about/MemberPage";
import Auth from "../auth/Auth";
import JobSearch from "../search/JobSearch";
import StudentSearch from "../search/StudentSearch";
import ProfileSearch from "../search/ProfileSearch";

//Student Ratings Page
import Student from "../students/student";

const DefaultNav = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Search" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/search-jobs">Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/search-profiles">Profiles</NavDropdown.Item>
              {/**<NavDropdown.Item href="/search-candidates">Students</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/rate">Rate</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup" className="auth-btn">
              Sign Up
            </Nav.Link>
            <Nav.Link href="/signin" className="auth-btn">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Switch>
        <Route path="/" exact component={VPHome} />
        <Route path="/search-jobs" exact component={JobSearch} />
        <Route path="/search-profiles" exact component={ProfileSearch} />
        <Route path="/search-candidates" exact component={StudentSearch} />
        <Route path="/about" exact component={About} />
        <Route path="/about/member/:name" component={Member} />
        <Route path="/help" component={Help} />
        <Route path="/rate" component={Student} />
        <Route path="/signup" exact component={() => <Auth type={"signup"} />} />
        <Route path="/signin" exact component={() => <Auth type={"signin"} />} />
      </Switch>
    </Router>
  );
};

export default DefaultNav;
