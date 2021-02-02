import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

//import components
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'

function NavBar() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">Team 03</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link eventKey={2} href="/contact-us">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />  
        </Switch>
      </Router>
    )
}

export default NavBar
