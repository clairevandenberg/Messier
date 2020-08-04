import React from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import Jumbotron from "../components/Jumbotron";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faEdit} from '@fortawesome/free-solid-svg-icons';

function UsersAccount() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
            <Jumbotron>
            <h1> Welcome Claire Vandenberg </h1>
            </Jumbotron>
            </Col>
        </Row>

            <Row>   
            <Col size="md-6">
            <Button className="Userbutton" href="/api/moodTracker">
              <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '5%', marginTop: '7%', fontSize: "2em", color:  "#1D84D7"}} className='fontawesome' />
                Start Tracking Your Mood...
            </Button>
            </Col>

            <Col size="md-6 sm-12">
            <Button className="Userbutton" href="/api/journal">
              <FontAwesomeIcon icon={faEdit} style={{ marginRight: '5%', marginTop: '7%', fontSize: "2em", color: "#1D84D7" }} className='fontawesome' />
                Start Journaling.
            </Button>
            </Col>
            </Row>

        </Container>
      </div>
    );
  }
  
  export default UsersAccount;
  