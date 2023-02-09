import { Component } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AltNav from "./AltNav";
import logo from "../netflix_logo.png";
import { Link } from "react-router-dom";

class MainNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" variant="dark">
        <Container fluid className="px-5">
          <Navbar.Brand href="#">
            <img src={logo} alt="netflix" style={{ height: 49 }}></img>
          </Navbar.Brand>
          <Navbar.Toggle className="mr-auto" aria-controls="navi">
            Browse<span className="arrow"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navi">
            <Nav className="mr-auto">
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
              <Link to="tv-shows">
                <div className="nav-link">TV Shows</div>
              </Link>
              <Nav.Link href="#">Movies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <AltNav />
        </Container>
      </Navbar>
    );
  }
}

export default MainNav;
