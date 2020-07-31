  
import React from 'react';
// import { Link } from "react-router-dom";
import "./style.css";
import { Container } from "../Grid";
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <div>
      <Container>
        <Nav fill variant="tabs" defaultActiveKey="/login">
        
        <Nav.Item>
        <Nav.Link className="messier navbar-brand navbar navbar-expand-lg" href="/usersAccount">
        MESSIER
        </Nav.Link>
        </Nav.Item>
   
        <Nav.Item>
        <Nav.Link className=" navbar-brand navbar navbar-expand-lg" href="/journal">
        Journal
        </Nav.Link>
        </Nav.Item>


        <Nav.Item>
        <Nav.Link className=" navbar-brand navbar navbar-expand-lg" href="/moodTracker">
        Mood
        </Nav.Link>
        </Nav.Item>

{/* 
        <Nav.Item>
        <Nav.Link className=" navbar-brand navbar navbar-expand-lg" href="/usersAccount">
        Account
        </Nav.Link>
        </Nav.Item> */}

      </Nav>
      </Container>
    </div>
  );
}

export default NavBar;