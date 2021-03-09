import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../css/Nav.css";
// Image(s) or SVG
import { ReactComponent as Logo } from "../../images/svg/logo.svg";
// Components
import Home from "../home/Home";
import About from "../about/About";
import Help from "../help/Help";
import Member from "../about/MemberPage";
import Auth from "../auth/Auth";

const DefaultNav = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand='lg' className='nav-bar'>
        <Navbar.Brand href='/'>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/browse'>Browse</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/help'>Help</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/signup' className='auth-btn'>
              Sign Up
            </Nav.Link>
            <Nav.Link href='/signin' className='auth-btn'>
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/about/member/:name' component={Member} />
        <Route path='/help' component={Help} />
        <Route
          path='/signup'
          exact
          component={() => <Auth type={"signup"} />}
        />
        <Route
          path='/signin'
          exact
          component={() => <Auth type={"signin"} />}
        />
      </Switch>
    </Router>
  );
};

export default DefaultNav;
