import { NavLink, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../css/Nav.css";
// Image(s) or SVG
import { ReactComponent as Logo } from "../../content/svg/logo.svg";
//Cookie
import { useCookies } from "react-cookie";

const DefaultNav = () => {
  const history = useHistory();
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
    history.push("/");
    window.location.reload();
  };
  if (cookie.Type_User == "professor") {
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
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/rate-students">Rate Students</NavLink>
          </Nav>
          <Nav className="nav-right">
            <NavLink to="/" className="auth-btn">
              <button onClick={handleRemoveCookie}>Sign Out</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  if (cookie.Type_User == "student") {
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
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Nav>
          <Nav className="nav-right">
            <NavLink to="/" className="auth-btn">
              <button onClick={handleRemoveCookie}>Sign Out</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  if (cookie.Type_User == "employer") {
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
            <NavLink to="/">Post Jobs</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Nav>
          <Nav className="nav-right">
            <NavLink to="/" className="auth-btn">
              <button onClick={handleRemoveCookie}>Sign Out</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

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
          {/** <NavLink to="/student-profile">Profile</NavLink> */}
          {/** <NavLink to="/forms">Forms</NavLink> */}
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Nav>
        <Nav className="nav-right">
          <NavLink to="/signup" className="auth-btn">
            Sign Up
          </NavLink>
          <NavLink to="/signin" className="auth-btn">
            Sign In
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DefaultNav;
