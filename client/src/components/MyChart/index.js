import React from "react";
import "../../pages/style.css";
import { Chart } from 'react-charts'
// import { alignAuto } from 'react-charts/dist/react-charts.development';
let moodTrackers = [];

fetch("/api/moodTracker")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    moodTrackers = data;
    MyChart();
  });
    console.log(moodTrackers);

  function MyChart() {
    let reversed = moodTrackers.slice().reverse();

   // create date labels for chart
   let labels = reversed.map(t => {
     let date = new Date(t.date);
     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
   });
   console.log(labels);

 
   const data  = React.useMemo(
      () => [
        {
          label: 'Mood',
          data: [{ }]
        },
      ],
      []
    )
   
    const axes = React.useMemo(
      () => [
        { labels, primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
 
      return (
        <div
           style={{
        width: '90%',
        height: '400px'
      }}>
        <Chart data={data} axes={axes}/>
        </div>
      )
  }

  export default MyChart;

// import React from 'react';
// import "../../pages/style.css";
// import { Chart } from 'react-charts'
// // import { alignAuto } from 'react-charts/dist/react-charts.development';

//   function MyChart() {
//     const data = React.useMemo(
//       () => [
//         {
//           label: 'Series 1',
//           data: [{ x: 1, y: 10}, { x: 2, y: 1 },{ x: 3, y: 5 }, { x: 4, y: 7 }]
//         },
//       ],
//       []
//     )
   
//     const axes = React.useMemo(
//       () => [
//         { primary: true, type: 'linear', position: 'bottom' },
//         { type: 'linear', position: 'left' }
//       ],
//       []
//     )
   
 
//       return (
//         <div
//            style={{
//         width: '90%',
//         height: '400px'
//       }}>
//         <Chart data={data} axes={axes} />
//         </div>
//       )
//   }

//   export default MyChart;