import React, { useState, useEffect } from "react";
import MyChart from "../components/MyChart";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { Chart } from 'react-charts'
import Button from 'react-bootstrap/Button'
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";


function MoodTracker (){
  // Setting our component's initial state
  const [moodTrackers, setMoodTracker] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all MoodTracker and store them with setMoodTracker
  useEffect(() => {
    loadMoodTracker()
  }, [])

  // Loads all MoodTracker and sets them to MoodTracker
  function loadMoodTracker() {
    API.getMoodTracker()
      .then(res => 
        setMoodTracker(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { moodRate, didToday } = event.target;
    setFormObject({...formObject, [moodRate]: didToday})
  };

  // When the form is submitted, use the API.saveMoodTracker method to save the moodTracker data
  // Then reload MoodTracker from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.moodRate && formObject.didToday) {
      API.saveMoodTracker({
        moodRate: formObject.moodRate,
        didToday: formObject.didToday
      })
        .then(res => loadMoodTracker())
        .catch(err => console.log(err));
    }
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
                  <FormBtn onClick={handleFormSubmit}>Save</FormBtn>                
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
