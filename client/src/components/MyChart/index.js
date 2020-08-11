
import React from 'react';
import "../../pages/style.css";
import { Chart } from 'react-charts'
// import { alignAuto } from 'react-charts/dist/react-charts.development';

  function MyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [{ x: 1, y: 10}, { x: 2, y: 1 },{ x: 3, y: 5 }, { x: 4, y: 7 }]
        },
      ],
      []
    )
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
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
        <Chart data={data} axes={axes} />
        </div>
      )
  }

  export default MyChart;