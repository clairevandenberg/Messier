import React from 'react';
import { render } from 'react-dom';
import LineChart from "../components/MyChart";
import ReactEchartsCore from 'echarts-for-react/lib/core';
import { Container, Row, Col } from "../components/Grid";
import "./style.css";
import { Card } from "react-bootstrap";
import { Input } from "../components/Form";
import Jumbotron from "../components/Jumbotron";

function MoodTracker (){

  let todaysMoods = [];
  // let myChart;
  
  fetch("/api/todaysMood")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    todaysMoods = data;

    populateTotal();
    populateTable();
    // populateChart();
  });

  function populateTotal() {
    // reduce todaysMood amounts to a single total value
    let total = todaysMoods.reduce((total, t) => {
      return total + parseInt(t.value);
    }, 0);
  
    let totalEl = document.querySelector("#total");
    totalEl.textContent = total;
  }

  function populateTable() {
    let tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
  
    todaysMoods.forEach(todaysMood => {
      
      // create and populate a table row
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${todaysMood.name}</td>
      <td>${todaysMood.value}</td>
    `;

    tbody.appendChild(tr);
  });
}

// function populateChart() {
//   // copy array and reverse it
//   let reversed = todaysMoods.slice().reverse();
//   let sum = 0;

//   // create date labels for chart
//   let labels = reversed.map(t => {
//     let date = new Date(t.date);
//     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//   });

//   // create incremental values for chart
//   let data = reversed.map(t => {
//     sum += parseInt(t.value);
//     return sum;
//   });

//   // remove old chart if it exists
//   if (myChart) {
//     myChart.destroy();
//   }

 
// }


function sendTodaysMood(isAdding) {
  let didToday = document.querySelector("#did-today");
  let moodRate = document.querySelector("#rating-mood");
  let errorEl = document.querySelector(".form .error");

  // validate form
  if (didToday.value === "" || moodRate.value === "") {
    errorEl.textContent = "Missing Information";
    return;
  }
  else {
    errorEl.textContent = "";
  }

// create record
let todaysMood = {
  name: didToday.value,
  value: moodRate.value,
  date: new Date().toISOString()
};

// if subtracting funds, convert amount to negative number
if (!isAdding) {
  todaysMood.value *= -1;
}

// add to beginning of current array of data
todaysMoods.unshift(todaysMood);

 // re-run logic to populate ui with new record
//  populateChart();
 populateTable();
 populateTotal();
 
 // also send to server
 fetch("/api/todaysMood", {
   method: "POST",
   body: JSON.stringify(todaysMood),
   headers: {
     Accept: "application/json, text/plain, */*",
     "Content-Type": "application/json"
   }
 })
 .then(response => {    
   return response.json();
 })
 .then(data => {
   if (data.errors) {
     errorEl.textContent = "Missing Information";
   }
   else {
     // clear form
     didToday.value = "";
     moodRate.value = "";
   }
 })
 .catch(err => {
   // fetch failed, so save in indexed db
  //  saveRecord(todaysMood);

   // clear form
   didToday.value = "";
   moodRate.value = "";
 });
}

document.querySelector("#saveMood-btn").onclick = function() {
 sendTodaysMood(true);
};

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

            <button id = "moodRate" className="gmoodBtton btn-success"> 
                    GOOD
            </button>
            <button id = "moodRate" className="ymoodBtton btn-success"> 
                    AVERAGE
            </button>
            <button id = "moodRate" className="rmoodBtton btn-success"> 
                    BAD
            </button>
                </Col>
                </Row>
            
          <Row className="form-group">
            <Col size="md-12">
            <h3>What Did You Do Today??</h3>
                  <Input 
                  className="why"
                  type="why" 
                  name="why" 
                  id="why" 
                  placeholder="Why ...?" 
                  />
                </Col>
                </Row>
     
          <Row className="form-group">
            <Col size="md-12">
            <h3>What did you do today?</h3>
                  <Input 
                  className="didToday"
                  type="didToday" 
                  name="didToday" 
                  id="didToday" 
                  placeholder="Today i did.." 
                  />
                </Col>
                </Row>
          </Card.Body>
          <div className="main chart-wrapper">
          <ReactEchartsCore
          LineChart={LineChart}
          />
          </div>
          <Card.Body>


          </Card.Body>
          </Card>
          </form>
          </Container>
          
    );
  }
  
  export default MoodTracker;
