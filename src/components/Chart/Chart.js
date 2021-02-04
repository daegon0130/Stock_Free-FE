import React, { Component } from 'react';
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

  export default Chart;