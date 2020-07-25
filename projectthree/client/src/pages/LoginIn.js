import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



function About() {
    return (
      <div>
          <h1>Sign</h1>
          <h1>IN</h1>
  
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col>
              <h1>FIRST NAME</h1>
              <h1>LAST NAME</h1>
              <h1>D.O.B</h1>
              <h1>USERNAME</h1>
              <h1>PASSWORD</h1>
              <h1>CONFIRM PASSWORD</h1>
              <h1> LOGIN</h1>
              <h1> SIGN UP</h1>
            </Col>
          </Row>
          
          <Row>
           
          </Row>
        </Container>
      </div>
    );
  }
  
  export default About;