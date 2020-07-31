import React from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UsersAccount() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
            <Jumbotron>
            <h1> Welcome John Doe </h1>
            </Jumbotron>
            </Col>
        </Row>

            <Row>   
            <Col size="md-6">
            <Button className="Userbutton" href="/moodTracker">Start Tracking Your Mood...
            <FontAwesomeIcon icon={['fa', 'edit']}/>
          
            </Button>
            </Col>

            <Col size="md-6 sm-12">
            <Button className="Userbutton" href="/journal">Start Journaling.
            <FontAwesomeIcon icon={['fa', 'chart-line']}/>
            </Button>
            </Col>
            </Row>

        </Container>
      </div>
    );
  }
  
  export default UsersAccount;
  