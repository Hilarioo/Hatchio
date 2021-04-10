import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../css/Nav.css";
// Image(s) or SVG
import { ReactComponent as Logo } from "../../content/svg/logo.svg";
//Sign Out
import { useCookies } from "react-cookie";

const DefaultNav = () => {
  //Set Current User
  const [cookie, removeCookie] = useCookies([
    "Type_User",
    "ID_OF_USER",
    "First_Name",
  ]);
  //Remove User
  const handleRemoveCookie = () => {
    removeCookie("Type_User");
    removeCookie("ID_OF_USER");
    removeCookie("First_Name");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar">
      <Navbar.Brand id="nav-logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-left">
          <NavDropdown
            title="Search"
            id="collasible-nav-dropdown"
            className="nav-search"
          >
            <NavDropdown.Item>
              <NavLink to="/search-jobs">Jobs</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to="/search-candidates">Students</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/student-profile">Profile</NavLink>
          <NavLink to="/forms">Forms</NavLink>
          <NavLink to="/ratings">Ratings(tmp)</NavLink>
          <NavLink to="/">NAME LOGGED IN : {cookie.First_Name}</NavLink>
        </Nav>
        <Nav className="nav-right">
          <NavLink to="/signup" className="auth-btn">
            Sign Up
          </NavLink>
          <NavLink to="/signin" className="auth-btn">
            Sign In
          </NavLink>
          <NavLink to="/" className="auth-btn">
            <button onClick={handleRemoveCookie}>Sign Out</button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DefaultNav;
