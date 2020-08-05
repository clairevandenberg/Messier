import React, { useState, } from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button'

  export default function SignUp() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 5 && password.length > 5;
     
    };
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log("email is " + email);
      console.log("password is " + password);
      console.log("name is " + firstName + lastName);
      console.log("Date of birth is " + dob);

      console.log("You have successfully signed in")
      }

  return (
    <Container fluid>
    <form onSubmit={handleSubmit}>
         <Card.Body>
         <Jumbotron>
              <h1>Sign In</h1>
            </Jumbotron>

            <Row className="form-group">
            <Col size="md-6">
                  <input 
                  className="form-control"
                  type="firstName" 
                  name="firstName" 
                  id="examplefirstName" 
                  placeholder="First Name" 
                  onChange={e => setFirstName(e.target.value)} 

                  />
                </Col>

                <Col size="md-6">
                  <input 
                  className="form-control"
                  type="lastName" 
                  name="lastName" 
                  id="examplelastName" 
                  placeholder="Last Name" 
                  onChange={e => setLastName(e.target.value)} 

                  />
                </Col>
                </Row>

                <Row className="form-group">
                <Col size="md-12">
                  <input 
                  className="form-control"
                  type="dob"
                  name="dob" 
                  id="exampledob" 
                  placeholder="Date of Birth" 
                  onChange={e => setDob(e.target.value)} 

                  />
                  </Col>
                  </Row>


                  <Row className="form-group">
                  <Col size="md-12">
                  <input                   
                  className="form-control"
                  type="email"
                  name="email" 
                  id="exampleemail" 
                  placeholder="Email" 
                  onChange={e => setEmail(e.target.value)} 
                  />
                  </Col>
                  </Row>

               
                  <Row className="form-group">
                  <Col size="md-12">
                  <input 
                  className="form-control"
                  type="password" 
                  name="password" 
                  id="examplePassword" 
                  placeholder="Password"  
                  onChange={e => setPassword(e.target.value)}
                  />
                  </Col>
                  </Row>

                  <Row className="form-group">
                  <Col size="md-12">
                  <Button className="buttonSubmit" disabled={!validateForm()} type="submit">
                  {/* // onClick={() => authenticated ? auth.logout() : auth.login()} */}
                    Create Account
                  </Button>                  
                  </Col>
                  </Row> 
                 </Card.Body>

          
    </form>
  </Container>
      
      );
    }
