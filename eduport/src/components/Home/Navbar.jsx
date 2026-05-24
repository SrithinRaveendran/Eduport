import React, { useState } from 'react';
import { Navbar as BSNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './styles/Navbar.css';

const LOGO = 'https://stackbros.in/eduport/landing/assets/images/logo.svg';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <BSNavbar bg="white" expand="lg" sticky="top" className="eduport-navbar shadow-sm" expanded={expanded}>
      <Container>
        {/* Brand */}
        <BSNavbar.Brand href="#">
          <img src={LOGO} alt="Eduport" height="36" />
        </BSNavbar.Brand>

        <BSNavbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <BSNavbar.Collapse id="main-nav">
          <Nav className="me-auto align-items-lg-center">

            {/* Category Dropdown */}
            <NavDropdown title="Category" id="category-drop">
              <NavDropdown title="Development" drop="end" id="dev-drop">
                <NavDropdown.Item href="#">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#">Data Science</NavDropdown.Item>
                <NavDropdown.Item href="#">Mobile Development</NavDropdown.Item>
                <NavDropdown.Item href="#">Software Engineering</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="#">Design</NavDropdown.Item>
              <NavDropdown.Item href="#">Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#">Education</NavDropdown.Item>
              <NavDropdown.Item href="#">IT & Software</NavDropdown.Item>
            </NavDropdown>

            {/* Demos */}
            <NavDropdown title="Demos" id="demos-drop">
              <NavDropdown.Item href="#">Home Default</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Education</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Academy</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Course</NavDropdown.Item>
              <NavDropdown.Item href="#">Home University</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Kindergarten</NavDropdown.Item>
            </NavDropdown>

            {/* Pages */}
            <NavDropdown title="Pages" id="pages-drop">
              <NavDropdown.Item href="#">Course Grid</NavDropdown.Item>
              <NavDropdown.Item href="#">Course List</NavDropdown.Item>
              <NavDropdown.Item href="#">Course Detail</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">Pricing</NavDropdown.Item>
            </NavDropdown>

            {/* Accounts */}
            <NavDropdown title="Accounts" id="accounts-drop">
              <NavDropdown.Item href="#">Instructor Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#">Student Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#">Admin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right side */}
          <Nav className="align-items-lg-center gap-2">
            <Nav.Link href="#" className="nav-link-text">Sign in</Nav.Link>
            <a href="#" className="btn btn-primary-edu rounded-pill px-4">
              Register
            </a>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
