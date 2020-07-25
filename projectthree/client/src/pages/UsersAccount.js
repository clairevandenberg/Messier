import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



function UsersAccount() {
    return (
      <div>
          
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Users Account Profile</h1>
            </Col>
          </Row>
          
          <Row>
            <Col size="md-12">
            <h2>John Doe</h2>
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default UsersAccount;
  