import React, { useState, useEffect } from "react";
import MyChart from "../components/MyChart";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { Chart } from 'react-charts'
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

function MoodTracker (){

  
};


  return (
    <Container fluid>
    
       <Card>
         <Card.Body>
         <Jumbotron>
              <h1>TRACK YOUR MOOD</h1>
            </Jumbotron>
      <form>
            <Row className="form-group">
            <Col size="md-12">
            <h3> On a scale of 1 to 10 how do you feel today?</h3>
            <Input 
                  className="moodRate"
                  onChange={handleInputChange}
                  type="moodRate" 
                  name="moodRate" 
                  id="moodRate" 
                  placeholder="10" 
                  />                  
                </Col>
                </Row>
     
          <Row className="form-group">
            <Col size="md-12">
            <h3>What did you do today?</h3>
                  <Input 
                  className="didToday"
                  onChange={handleInputChange}
                  type="didToday" 
                  name="didToday" 
                  id="didToday" 
                  placeholder="Today i did.." 
                  />
                </Col>
                </Row>

                <Row className="form-group">
                  <Col size="md-12">
                  <FormBtn onClick={handleFormSubmit}>Save and Update Graph</FormBtn>                
                  </Col>
                  </Row> 
                </form>
          </Card.Body>

          <Col size="md-12">
            <Jumbotron>
              <h1>Your Moods</h1>
            </Jumbotron>
          <div className="main chart-wrapper">
          <MyChart
          Chart={Chart} />
          </div>
        
          </Col>
        </Card>
      </Container>
     
    );
  }
  
  export default MoodTracker;
