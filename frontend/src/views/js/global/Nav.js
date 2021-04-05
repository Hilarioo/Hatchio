import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../css/Nav.css";
// Image(s) or SVG
import { ReactComponent as Logo } from "../../content/svg/logo.svg";

const DefaultNav = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='nav-bar'>
      <Navbar.Brand id='nav-logo'>
        <NavLink to='/'>
          <Logo />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto nav-left'>
          <NavDropdown
            title='Search'
            id='collasible-nav-dropdown'
            className='nav-search'>
            <NavDropdown.Item>
              <NavLink to='/search-jobs'>Jobs</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to='/search-candidates'>Students</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/help'>Help</NavLink>
          <NavLink to='/student-profile'>Profile</NavLink>
          <NavLink to='/forms'>Forms</NavLink>
        </Nav>
        <Nav className='nav-right'>
          <NavLink to='/signup' className='auth-btn'>
            Sign Up
          </NavLink>
          <NavLink to='/signin' className='auth-btn'>
            Sign In
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DefaultNav;
