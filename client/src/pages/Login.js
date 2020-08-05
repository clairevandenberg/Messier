import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import { Input } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button';
// import { isAuthenticated } from "../../../isAuthenticated";
// import { Redirect } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function validateForm() {
    return email.length > 5 && password.length > 5;
   
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);
    console.log("You have successfully signed in")
    }

    // Login.propTypes = {
    //   onChange: PropTypes.function.isRequired,
    //   errorMessage: PropTypes.string

    //   }
  // redirect to users account. 
  // if (isAuthenticated) {
  //   return <Redirect to='/usersAccount' />
  // }
 

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
                  value={email} 
                  id="exampleemail" 
                  placeholder="Email" 
                  onChange={e => setEmail(e.target.value)}

                  />
                </Col>
                </Row>

                <Row className="form-group">
                <Col size="md-12">
                  <Input 
                  type="password" 
                  value={password}
                  id="examplePassword" 
                  placeholder="Password" 
                  onChange={e => setPassword(e.target.value)}

                  />
                  </Col>
                  </Row> 

                  <Row className="form-group">
                  <Col size="md-12">
                  <Button className="buttonSubmit" disabled={!validateForm()} type="submit">
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
  )
  };