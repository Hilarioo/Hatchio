import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//import components
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Member from "./about/MemberPage";

import User from "./user/user";

const NavBar = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">Team 03</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/user">Register/Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/about/member/:name" component={Member} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
};

export default NavBar;
