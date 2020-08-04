import React, { useState, } from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button'


function SignUp (){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
  };


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
                  />
                </Col>

                <Col size="md-6">
                  <input 
                  className="form-control"
                  type="lastName" 
                  name="lastName" 
                  id="examplelastName" 
                  placeholder="Last Name" 
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
                  onChange={e => setUsername(e.target.value)} 
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
                  <Button className="buttonSubmit" type="submit" href="/api/usersAccount" 
                  // onClick={() => authenticated ? auth.logout() : auth.login()}
                  >
                    Create Account
                  </Button>                  
                  </Col>
                  </Row> 
                 </Card.Body>

          
    </form>
  </Container>
      
      );
    }
export default SignUp;