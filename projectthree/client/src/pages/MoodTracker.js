import React from "react";
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import { Input } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
// import { Chart } from "chart.js";

function MoodTracker (){

// class LineChart extends React.Component {
//   constructor(props) {
//     super(props)
//     this.chartRef = React.createRef();
//   }

//   componentDidUpdate() {
//     this.myChart.data.labels = this.props.data.map(d => d.time);
//     this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
//     this.myChart.update();
//   }

//   componentDidMount() {
//     this.myChart = new Chart(this.chartRef.current, {
//       type: 'line',
//       data: {
//         labels,
//         datasets: [{
//             label: "Mood Over Time",
//             fill: true,
//             backgroundColor: "#6666ff",
//             data
//         }]
//     }
//   });
// }

//   //   const [username] = useState();
//   // const [password] = useState();

//   // const handleSubmit = e => {
//   //   e.preventDefault();
//   //   console.log("username is " + username);
//   //   console.log("password is " + password);
//   };

  return (
    <Container fluid>
    <form>
       <Card>
         <Card.Body>
         <Jumbotron>
              <h1>TRACK YOUR MOOD</h1>
            </Jumbotron>

            <Row className="form-group">
            <Col size="md-12">
            <h3> How do you feel today?</h3>

            <button className="gmoodBtton btn-success"> 
                    GOOD
            </button>
            <button className="ymoodBtton btn-success"> 
                    AVERAGE
            </button>
            <button className="rmoodBtton btn-success"> 
                    BAD
            </button>
                </Col>
                </Row>
            
          <Row className="form-group">
            <Col size="md-12">
            <h3>Why?</h3>
                  <Input 
                  className="why"
                  type="why" 
                  name="why" 
                  id="why" 
                  placeholder="Why?" 
                  />
                </Col>
                </Row>
     
          <Row className="form-group">
            <Col size="md-12">
            <h3>What did you do today?</h3>
                  <Input 
                  className="doToday"
                  type="doToday" 
                  name="doToday" 
                  id="doToday" 
                  placeholder="Today i did.." 
                  />
                </Col>
                </Row>
          </Card.Body>
          <canvas ref={this.chartRef} />;
          <Card.Body>


          </Card.Body>
          </Card>
          </form>
          </Container>
          
    );
  }
  
  export default MoodTracker;