import React from 'react';
import "../../pages/style.css";
import MoodTracker from '../../pages/MoodTracker';

class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.label = this.props.data.reversed.map(t => t.date);
      this.myChart.data.datasets[0].data = this.props.reversed.data.map(t => t.value);
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
    type: 'line',
    data: {
      label: ['Red', 'Yellow', 'Green'],
      datasets: [{
          label: "Mood Over Time",
          fill: true,
          backgroundColor: "#1D84D7",
          data: [12, 19, 3, 5, 2, 3]
      }]
  }
});
}
  
    render() {
      return (
        <div>
          <MoodTracker 
          data={this.state.feeds[0].data}
          title={this.state.feeds[0].title}
          color="#1D84D7">
        <button onClick={() => this.changeData()}>Update</button>
          </MoodTracker>
        </div>
      )
    }
  }


  export default Chart;
