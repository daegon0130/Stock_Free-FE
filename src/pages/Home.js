import React from "react";
import axios from "axios";
import "./Home.css";
import Navi from "../components/Navi";
import Header from "../components/Header";
import Chart from "../components/Chart";
import coreimg from "../images/핵심 제품.svg";

class Home extends React.Component {
  state = {
    isLoading: true,
    startDate: "2020-08-01",
    endDate: "2020-08-31",
    date: [], //total date range
    oriDate: [], //before parsing
    day: [],
    week: [],
    month: [],

    //월별, 주별, 일별 판매량 데이터
    monthHistory: [],
    weekHistory: [],
    dayHistory: [],
    isShow: [0],
    showMenu: false,
    core: 0,
    time: 1,
    totalDate: {
      host: "stockfree1.ckta3csfmjh6.ap-northeast-2.rds.amazonaws.com",
      user: "sfadmin",
      password: "11dnjf11dlf",
      db: "userID",
      charset: "utf8",
    },
    history: {
      host: "stockfree1.ckta3csfmjh6.ap-northeast-2.rds.amazonaws.com",
      user: "sfadmin",
      password: "11dnjf11dlf",
      db: "userID",
      charset: "utf8",
      start: "2020-08-10",
      end: "2020-09-20",
    },
  };
  getTotalDate = async Data => {
    //const getget = await axios.get('https://485stnblna.execute-api.ap-northeast-2.amazonaws.com/testapi');
    let result;
    await axios({
      method: "post",
      url:
        "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/history",
      data: Data,
    })
      .then(function(response) {
        result = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    this.setState({
      date: [
        result[0].substring(2, 4) +
          "년 " +
          result[0].substring(5, 7) +
          "월 " +
          result[0].substring(8, 10) +
          "일",
        result[1].substring(2, 4) +
          "년 " +
          result[1].substring(5, 7) +
          "월 " +
          result[1].substring(8, 10) +
          "일",
      ],
      oriDate: [result[0], result[1]],
    });
  };

  getDayHistory = async Data => {
    //const getget = await axios.get('https://485stnblna.execute-api.ap-northeast-2.amazonaws.com/testapi');
    let result;
    await axios({
      method: "post",
      url:
        "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/day",
      data: Data,
    })
      .then(function(response) {
        result = response.data;
        //console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.formatDay(result);
    //this.setState({ isLoading: false });
  };
  getWeekHistory = async Data => {
    let result;
    await axios({
      method: "post",
      url:
        "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/week",
      data: Data,
    })
      .then(function(response) {
        result = response.data;

        //console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.formatWeek(result);
  };
  getMonthHistory = async Data => {
    let result;
    await axios({
      method: "post",
      url:
        "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/month",
      data: Data,
    })
      .then(function(response) {
        result = response.data;
        //console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.formatMonth(result);
    //
    //
    //result.map(v => (v.value = v.value.split(",").map(x => +x)));
    //result.map(v=>(v.value.map(x=>(parseInt(x)))));
    //this.setState({ productPredict: result, isLoading: false });
    //this.setOption();
    //this.options.series = this.information.map(({value, name, id})=>({name:name, data:value, color:this.colors[id%10]}));
  };
  componentDidMount = async () => {
    await this.getDayHistory(this.state.history);
    await this.getWeekHistory(this.state.history);
    await this.getMonthHistory(this.state.history);
    await this.getTotalDate(this.state.totalDate);
    this.setState({ isLoading: false });
  };

  //componentDidUpdate(prevState) {
  // 전형적인 사용 사례 (props 비교를 잊지 마세요)
  //  if (this.state.history !== prevState.history) {
  //    this.getDayHistory(this.state.history);
  //    this.getWeekHistory(this.state.history);
  //    this.getMonthHistory(this.state.history);
  //  }
  //}

  formatDay = result => {
    //console.log(result);
    var value = [];
    var values = [];
    var parseDay = [];
    var day = [];
    var i = 0;
    for (var key in result[0]) {
      if (i !== 0) {
        parseDay.push({ id: i - 1, name: key });
      }
      i = i + 1;
    }
    i = 0;
    for (var o in result) {
      for (key in result[o]) {
        if (i !== 0) {
          result[o][key] *= 1;
          value.push(result[o][key]);
          //parseDay[o]["value"] = result[o][key];
        } else {
          day.push(result[o][key]);
        }
        i = i + 1;
      }
      i = 0;
      values.push(value);
      value = [];
    }
    for (i = 0; i < values[0].length; i = i + 1) {
      for (var j = 0; j < values.length; j = j + 1) {
        value.push(values[j][i]);
      }
      parseDay[i].value = value;
      value = [];
    }
    for (o in day) {
      day[o] = day[o].substring(5, 7) + "월 " + day[o].substring(8, 10) + "일";
    }
    this.setState({ day: day, dayHistory: parseDay });
  };
  formatWeek = result => {
    //console.log(result);
    var value = [];
    var values = [];
    var parseWeek = [];
    var week = [];
    var i = 0;
    for (var key in result[0][0]) {
      if (i !== 0) {
        parseWeek.push({ id: i - 1, name: key });
      }
      i = i + 1;
    }

    i = 0;
    for (var o in result) {
      for (key in result[o][0]) {
        if (i !== 0) {
          result[o][0][key] *= 1;
          value.push(result[o][0][key]);
          //parseDay[o]["value"] = result[o][key];
        } else {
          week.push(result[o][0][key]);
        }
        i = i + 1;
      }
      i = 0;
      values.push(value);
      value = [];
    }
    for (i = 0; i < values[0].length; i = i + 1) {
      for (var j = 0; j < values.length; j = j + 1) {
        value.push(values[j][i]);
      }
      parseWeek[i].value = value;
      value = [];
    }
    //console.log(parseWeek);
    //console.log(week);
    for (o in week) {
      week[o] =
        week[o].substring(5, 7) +
        "월 " +
        week[o].substring(8, 10) +
        "일 ~ " +
        week[o].substring(18, 20) +
        "월 " +
        week[o].substring(21, 23) +
        "일";
    }
    this.setState({ week: week, weekHistory: parseWeek });
  };
  formatMonth = result => {
    //console.log(result);
    var value = [];
    var values = [];
    var parseMonth = [];
    var month = [];
    var i = 0;
    for (var key in result[0][0]) {
      if (i !== 0) {
        parseMonth.push({ id: i - 1, name: key });
      }
      i = i + 1;
    }

    i = 0;
    for (var o in result) {
      for (key in result[o][0]) {
        if (i !== 0) {
          result[o][0][key] *= 1;
          value.push(result[o][0][key]);
        } else {
          month.push(result[o][0][key]);
        }
        i = i + 1;
      }
      i = 0;
      values.push(value);
      value = [];
    }
    for (i = 0; i < values[0].length; i = i + 1) {
      for (var j = 0; j < values.length; j = j + 1) {
        value.push(values[j][i]);
      }
      parseMonth[i].value = value;
      value = [];
    }
    //console.log(parseMonth);
    //console.log(month);
    for (o in month) {
      month[o] = month[o] + "월";
    }
    this.setState({ month: month, monthHistory: parseMonth });
  };

  showMenu = this.showMenu.bind(this);
  closeMenu = this.closeMenu.bind(this);
  colors = [
    "#7cb5ec",
    "#434348",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1",
  ];
  information = [];
  notShow = [];
  smallOptions = {
    title: {
      text: "",
    },
    xAxis: {
      //categories: this.state.datePredict,
      labels: {
        //enabled: false,
      },
      minPadding: 0,
      min: 0.5,
      //endOnTick: false,
      maxPadding: 0,
      //type: "datetime",
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
    },
    chart: {
      type: "areaspline",
      width: 292,
      height: 84,
      margin: 0,
      animation: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        data: [],
        marker: { radius: 0 },
        name: "",
        dashStyle: "shortdash",
        color: "",
      },
    ],
  };
  options = {
    title: {
      text: "",
    },
    xAxis: {
      //type: "datetime",
      labels: {
        //format: "{value:%b-%e}",
      },
      //pointInterval: 24 * 3600 * 1000,
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    chart: {
      type: "line",
      width: 780,
      height: 370,
      animation: false,
    },
    series: [
      {
        name: "",
        data: [],
        pointInterval: 24 * 3600 * 1000, // one day
      },
    ],
  };
  handleAddChange = data => {
    const show = this.state.isShow;
    this.setState({
      isShow: Array.from(new Set(show.concat(data))),
    });
    //console.log(this.state.isShow)
  };
  handleRemoveChange = data => {
    const show = this.state.isShow;
    this.setState({
      isShow: show.filter(info => info !== data),
    });
    //console.log(this.state.isShow)
  };
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
  setCore = id => {
    this.setState({ core: id });
  };
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
  changeTime = x => {
    this.setState({ time: x });
  };
  handleStartDate = async event => {
    //await this.setState({ startDate: event.target.value });
    await this.setState({
      history: {
        ...this.state.history,
        start: event.target.value,
      },
    });
    this.handleDate();
  };
  handleEndDate = async event => {
    //await this.setState({ endDate: event.target.value });
    await this.setState({
      history: {
        ...this.state.history,
        end: event.target.value,
      },
    });
    console.log(this.state.history);
    this.handleDate();
  };
  handleDate = () => {
    //this.setState({
    //  history: {
    //    ...this.state.history,
    //    start: this.state.startDate,
    //    end: this.state.endDate,
    //  },
    //});
    this.getDayHistory(this.state.history);
    this.getWeekHistory(this.state.history);
    this.getMonthHistory(this.state.history);
  };
  render() {
    const {
      isLoading,
      weekHistory,
      dayHistory,
      monthHistory,
      time,
    } = this.state;

    if (isLoading === false) {
      // 그래프 옵션값 바꾸기
      let p = [];
      if (time === 1) {
        p = JSON.parse(JSON.stringify(dayHistory));
        this.options.xAxis.categories = this.state.day;
      } else if (time === 2) {
        p = JSON.parse(JSON.stringify(weekHistory));
        this.options.xAxis.categories = this.state.week;
      } else {
        p = JSON.parse(JSON.stringify(monthHistory));
        this.options.xAxis.categories = this.state.month;
      }
      this.information = p.filter(
        product => this.state.isShow.indexOf(product.id) !== -1
      );
      this.notShow = p.filter(
        product => this.state.isShow.indexOf(product.id) === -1
      );
      this.options.series = this.information.map(({ value, name, id }) => ({
        name: name,
        data: value,
        color: this.colors[id % 10],
      }));
      // small week chart 옵션 바꾸기.
      const weekOptions = JSON.parse(JSON.stringify(this.smallOptions));
      const week = JSON.parse(JSON.stringify(weekHistory));
      const weekCoreSales = week.filter(
        product => this.state.core === product.id
      );
      weekOptions.series = weekCoreSales.map(({ value, name, id }) => ({
        name: name,
        data: value,
      }));
      weekOptions.series[0].color = "#ffb400";
      weekOptions.xAxis.categories = this.state.week;
      weekOptions.xAxis.max = this.state.week.length - 1.5;
      weekOptions.yAxis.max = null;
      if (this.state.week.length === 1) {
        weekOptions.series[0].data = [
          weekOptions.series[0].data[0],
          weekOptions.series[0].data[0],
        ];
        weekOptions.xAxis.categories = [this.state.week[0], this.state.week[0]];
        weekOptions.xAxis.max = this.state.week.length - 0.5;
      }
      if (this.state.week.length < 5) {
        if (Math.max.apply(null, weekCoreSales[0].value) < 3) {
          weekOptions.yAxis.max =
            Math.max.apply(null, weekCoreSales[0].value) + 1;
        } else {
          weekOptions.yAxis.max =
            Math.max.apply(null, weekCoreSales[0].value) + 5;
        }
      } else {
        if (Math.max.apply(null, weekCoreSales[0].value) === 0) {
          weekOptions.yAxis.max =
            Math.max.apply(null, weekCoreSales[0].value) + 1;
        }
      }
      const weekSum = this.average(weekOptions.series[0].data).toFixed(1);
      // small month chart 옵션 바꾸기.
      const monthOptions = JSON.parse(JSON.stringify(this.smallOptions));
      const month = JSON.parse(JSON.stringify(monthHistory));
      const monthCoreSales = month.filter(
        product => this.state.core === product.id
      );
      monthOptions.series = monthCoreSales.map(({ value, name, id }) => ({
        name: name,
        data: value,
      }));
      monthOptions.series[0].color = "#1adba2";
      monthOptions.xAxis.categories = this.state.month;
      monthOptions.xAxis.max = this.state.month.length - 1.5;
      monthOptions.yAxis.max = null;
      if (this.state.month.length === 1) {
        monthOptions.series[0].data = [
          monthOptions.series[0].data[0],
          monthOptions.series[0].data[0],
        ];
        monthOptions.xAxis.categories = [
          this.state.month[0],
          this.state.month[0],
        ];
        monthOptions.xAxis.max = this.state.month.length - 0.5;
      }
      if (this.state.month.length < 5) {
        if (Math.max.apply(null, monthCoreSales[0].value) < 3) {
          monthOptions.yAxis.max =
            Math.max.apply(null, monthCoreSales[0].value) + 1;
        } else {
          monthOptions.yAxis.max =
            Math.max.apply(null, monthCoreSales[0].value) + 5;
        }
      } else {
        if (Math.max.apply(null, monthCoreSales[0].value) === 0) {
          monthOptions.yAxis.max =
            Math.max.apply(null, monthCoreSales[0].value) + 1;
        }
      }
      const monthSum = this.average(monthOptions.series[0].data).toFixed(1);
      // small day chart 옵션 바꾸기.
      const dayOptions = JSON.parse(JSON.stringify(this.smallOptions));
      const day = JSON.parse(JSON.stringify(dayHistory));
      const dayCoreSales = day.filter(
        product => this.state.core === product.id
      );
      dayOptions.series = dayCoreSales.map(({ value, name, id }) => ({
        name: name,
        data: value,
      }));
      dayOptions.series[0].color = "#007bff";
      dayOptions.xAxis.categories = this.state.day;
      dayOptions.xAxis.max = this.state.day.length - 1.5;
      dayOptions.yAxis.max = null;
      if (this.state.day.length === 1) {
        dayOptions.series[0].data = [
          dayOptions.series[0].data[0],
          dayOptions.series[0].data[0],
        ];
        dayOptions.xAxis.categories = [this.state.day[0], this.state.day[0]];
        dayOptions.xAxis.max = this.state.day.length - 0.5;
      }
      if (this.state.day.length < 5) {
        if (Math.max.apply(null, dayCoreSales[0].value) < 3) {
          dayOptions.yAxis.max =
            Math.max.apply(null, dayCoreSales[0].value) + 1;
        } else {
          dayOptions.yAxis.max =
            Math.max.apply(null, dayCoreSales[0].value) + 5;
        }
      } else {
        if (Math.max.apply(null, dayCoreSales[0].value) === 0) {
          dayOptions.yAxis.max =
            Math.max.apply(null, dayCoreSales[0].value) + 1;
        }
      }
      const daySum = this.average(dayOptions.series[0].data).toFixed(1);
      //if (Math.max.apply(null, dayCoreSales[0].value) === 0) {
      //  dayOptions.yAxis.max = 0;
      //}
      // 핵심 제품.
      const coreProduct = p[this.state.core].name;
      /// 리스트 높이.
      let itemHeight = 365 - 29.6 * this.state.isShow.length;
      return (
        <section className="container">
          <nav className="navi">
            <Navi />
          </nav>
          <section className="contents">
            <div className="header">
              <Header
                startDate={this.state.date[0]}
                lastDate={this.state.date[1]}
              />
            </div>
            <div className="sales-history">
              <h1>판매 추이</h1>
              <div className="first-row">
                <div className="product-select">
                  <h5>핵심 제품</h5>
                  <div className="coreProduct">
                    {coreProduct}
                  </div>
                  <div className="product-menu">
                    <button className="menu" onClick={this.showMenu}>
                      Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                      &nbsp;&nbsp;&nbsp;<img src={coreimg} alt="logo" />
                    </button>
                    {this.state.showMenu
                      ? <div className="button-menu">
                          {p.map(v => {
                            return (
                              <button onClick={() => this.setCore(v.id)}>
                                {v.name}
                              </button>
                            );
                          })}
                        </div>
                      : null}
                  </div>
                </div>
                <div className="dayChart">
                  <h5>일별 판매량</h5>
                  <div className="chartSales">
                    {this.numberWithCommas(daySum)}
                  </div>
                  <div className="small-chart">
                    <Chart options={dayOptions} />
                  </div>
                </div>
                <div className="weekChart">
                  <h5>주별 판매량</h5>
                  <div className="chartSales">
                    {this.numberWithCommas(weekSum)}
                  </div>
                  <div className="small-chart">
                    <Chart options={weekOptions} />
                  </div>
                </div>
                <div className="monthChart">
                  <h5>월별 판매량</h5>
                  <div className="chartSales">
                    {this.numberWithCommas(monthSum)}
                  </div>
                  <div className="small-chart">
                    <Chart options={monthOptions} />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="sales-chart">
                  <div className="chart-name">판매량 추이</div>
                  <hr />
                  <div className="selectSpace">
                    <div className="selectTerm">
                      <button
                        style={
                          this.state.time === 1
                            ? {
                                backgroundColor: "#007bff",
                                color: "#fff",
                                borderRadius: "8px 0 0 8px",
                              }
                            : {
                                backgroundColor: "#fff",
                                borderRadius: "8px 0 0 8px",
                              }
                        }
                        onClick={() => this.changeTime(1)}
                      >
                        일별
                      </button>
                      <button
                        style={
                          this.state.time === 2
                            ? { backgroundColor: "#007bff", color: "#fff" }
                            : { backgroundColor: "#fff" }
                        }
                        onClick={() => this.changeTime(2)}
                      >
                        주별
                      </button>
                      <button
                        style={
                          this.state.time === 3
                            ? {
                                backgroundColor: "#007bff",
                                color: "#fff",
                                borderRadius: "0 8px 8px 0",
                              }
                            : {
                                backgroundColor: "#fff",
                                borderRadius: "0 8px 8px 0",
                              }
                        }
                        onClick={() => this.changeTime(3)}
                      >
                        월별
                      </button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <input
                        type="date"
                        name="startDate"
                        value={this.state.history.start}
                        min={this.state.oriDate[0]}
                        max={this.state.history.end}
                        onChange={event => this.handleStartDate(event)}
                      />
                      <input
                        type="date"
                        name="endDate"
                        value={this.state.history.end}
                        min={this.state.history.start}
                        max={this.state.oriDate[1]}
                        onChange={event => this.handleEndDate(event)}
                      />
                    </form>
                  </div>
                  <hr />
                  <div className="real-chart">
                    <Chart options={this.options} />
                  </div>
                </div>
                <div className="salesList">
                  <div className="listName">판매 제품</div>
                  <hr />
                  <div className="productShowSpace">
                    {this.information.map(v => {
                      return (
                        <div key={v.id} className="productShow">
                          <div>
                            {v.name}
                          </div>
                          <button onClick={() => this.handleRemoveChange(v.id)}>
                            제거
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <hr />
                  <div
                    className="productNotShowSpace"
                    style={{ height: itemHeight }}
                  >
                    {this.notShow.map(product => {
                      return (
                        <div key={product.id} className="productNotShow">
                          <div>
                            {product.name}
                          </div>
                          <button
                            onClick={() => this.handleAddChange(product.id)}
                          >
                            추가
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      );
    } else {
      return (
        <section className="container">
          <nav className="navi">
            <Navi />
          </nav>
          <section className="contents">
            <div className="loader_text">Loading...</div>
          </section>
        </section>
      );
    }
  }
}

export default Home;
