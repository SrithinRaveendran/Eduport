import React, { useState } from 'react';
import { Navbar as BSNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { tabchange } from '../../redux-toolkit/tabSlice';

import './styles/Navbar.css';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


const LOGO = 'https://stackbros.in/eduport/landing/assets/images/logo.svg';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const token = localStorage.getItem("token")
  // console.log(token, 'from navbar')
  const decoded = token ? jwtDecode(token) : ""
  // console.log(decoded.name)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onDropdownClick = (event)=>{
  //  console.log(event)
   dispatch(tabchange(event))
  }

  const logout=()=>{
    localStorage.removeItem("token")
    navigate('/login')
  }

  const login=()=>{
    if(!token){
      navigate("/login")
    }
  }
  const TABS = ['All', 'Web Design', 'Development', 'Graphic Design', 'Marketing', 'Finance']
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
         
        <BSNavbar.Collapse id="main-nav" style={{backgroundColor:"white"}} >
         
          <Nav className="me-auto align-items-lg-center" >

            {/* Category Dropdown */}
            <NavDropdown title="Category" id="category-drop" onSelect={(e)=>onDropdownClick(e)} >
              {TABS.map(each=> 
               
              <NavDropdown.Item  href='#popular-courses' eventKey={each} ><a href='#popular-courses'>{each}</a></NavDropdown.Item>)}
              
              {/* <NavDropdown.Item href="#" eventKey="Web Development" >Web Development</NavDropdown.Item> */}
              {/* <NavDropdown title="Development" drop="end" id="dev-drop"> */}
                {/* <NavDropdown.Item href="#">Web Development</NavDropdown.Item>
                <NavDropdown.Item href="#">Data Science</NavDropdown.Item>
                <NavDropdown.Item href="#">Mobile Development</NavDropdown.Item>
                <NavDropdown.Item href="#">Software Engineering</NavDropdown.Item> */}
              {/* </NavDropdown> */}
              {/* <NavDropdown.Item href="#" eventKey="Design">Design</NavDropdown.Item>
              <NavDropdown.Item href="#" eventKey="Marketing">Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#" eventKey="Education">Education</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#">IT & Software</NavDropdown.Item> */}
            </NavDropdown>

            {/* Demos */}
            {/* <NavDropdown title="Demos" id="demos-drop">
              <NavDropdown.Item href="#">Home Default</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Education</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Academy</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Course</NavDropdown.Item>
              <NavDropdown.Item href="#">Home University</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Kindergarten</NavDropdown.Item>
            </NavDropdown> */}

            {/* Pages */}
            {/* <NavDropdown title="Pages" id="pages-drop">
              <NavDropdown.Item href="#">Course Grid</NavDropdown.Item>
              <NavDropdown.Item href="#">Course List</NavDropdown.Item>
              <NavDropdown.Item href="#">Course Detail</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">Pricing</NavDropdown.Item>
            </NavDropdown> */}

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
            {/* <Nav.Link href="#" className="nav-link-text">Sign in</Nav.Link>
            <a href="#" className="btn btn-primary-edu rounded-pill px-4">
              Register
            </a> */}
            {decoded ? <div className="  pro-card ">
              
              {/* <p > <span><CgProfile color='blue' size={25} /></span>{decoded.name}</p> */}
              <Nav.Link className="nav-link-text"> <span><CgProfile color='blue' size={25} /></span>{decoded.name}</Nav.Link>
              <button className=" btn" onClick={()=>logout()}>Logout</button> </div> :
              <div>
              <CgProfile size={30} />
              <button className=" btn" onClick={()=>login()}>Login</button>  
              </div>}

          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
