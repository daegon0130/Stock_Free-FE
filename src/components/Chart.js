import React, { Component } from 'react';
import './Chart.css';
import Highcharts from 'highcharts';

class Chart extends Component {
    constructor(props) {
      super(props);
      this.chartContainer = React.createRef();
    }
  
    componentDidMount() {
      this.chart = new Highcharts[this.props.type || 'Chart'](
        this.chartContainer.current,
        this.props.options
      );
    }
    componentDidUpdate() {
      if (this.props.allowChartUpdate !== false) {
        this.chart.update(
          this.props.options,
          ...(this.props.updateArgs || [true, true])
        );
      }
  }
    componentWillUnmount() {
      this.chart.destroy();
    }
  
    render() {
      //this.props.onCreate(this.series.)
      return <div ref={this.chartContainer} />;
    }
  }
  /*
  class Apps extends Component {
    render() {
      const options = {
        title: {
          text: 'Fruit Consumption',
        },
        xAxis: {
          categories: [
            'Apples',
            'Bananas',
            'Oranges',
            'Pineapples',
            'Blueberries',
          ],
        },
        yAxis: {
          title: {
            text: 'Fruit eaten',
          },
        },
        chart: {
          type: 'line',
        },
        series: [
          {
            name: 'Jane',
            data: [1, 0, 4, 0, 3],
          },
          {
            name: 'John',
            data: [5, 7, 3, 2, 4],
          },
          {
            name: 'Doe',
            data: [0, 0, 0, 1, 0],
          },
        ],
      };
  
      return (
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
  
          <Chart options={options} />
        </div>
      );
    }
  }
  */
  export default Chart;