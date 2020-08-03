import React, { useState, } from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import { Input } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button'

function Login (){

  const [username] = useState();
  const [password] = useState();

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
            <Col size="md-12">
                  <Input 
                  className="form-control"
                  type="email" 
                  name="email" 
                  id="exampleemail" 
                  placeholder="Email" 
                  />
                </Col>
                </Row>

                <Row className="form-group">
                <Col size="md-12">
                  <Input 
                  type="password" 
                  name="password" 
                  id="examplePassword" 
                  placeholder="Password" 
                  />
                  </Col>
                  </Row> 

                  <Row className="form-group">
                  <Col size="md-12">
                  <Button className="buttonSubmit" type="submit" href="/api/usersAccount">
                    LOGIN
                  </Button>                  
                  </Col>
                  </Row> 
                 </Card.Body>

                 <Card.Body>
                 <Button className="buttonAccont" href="/api/signUp">Create Account</Button>
                 </Card.Body>
                 
    </form>
  </Container>         
       
    );
  }
  
  export default Login;