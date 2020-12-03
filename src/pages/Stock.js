import React from "react";
import axios from "axios";
import "./Stock.css";
import Navi from "../components/Navi";
import Header from "../components/Header";
import StockTableList from "../components/StockTableList";
import Chart from "../components/Chart";
//import StockList from '../components/StockList'
//https://www.popit.kr/%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-%EC%95%97-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%95%98%EC%9D%B4%EC%B0%A8%ED%8A%B8%EB%A1%9C-%EC%B0%A8%ED%8A%B8%EB%A5%BC-%EA%B7%B8%EB%A0%B8%EB%8A%94%EB%8D%B0-%EC%B0%A8/
class Stock extends React.Component {
  state = {
    isLoading: true,
    date: [],
    datePredict: [],
    productPredict: [],
    isShow: [1],
    predictData: {
      host: "stockfree1.ckta3csfmjh6.ap-northeast-2.rds.amazonaws.com",
      user: "sfadmin",
      password: "11dnjf11dlf",
      db: "userID",
      charset: "utf8",
    },
    totalDate: {
      host: "stockfree1.ckta3csfmjh6.ap-northeast-2.rds.amazonaws.com",
      user: "sfadmin",
      password: "11dnjf11dlf",
      db: "userID",
      charset: "utf8",
    },
    predictDateData: {
      key: "datepredict",
    },
    login: false,
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
        //console.log(result);
        //this.setState({date: [response.data[0].substring(2,4)+"년 "+response.data[0].substring(5,7)+"월 "+response.data[0].substring(8,10)+"일", response.data[0].substring(2,4)+"년 "+response.data[0].substring(5,7)+"월 "+response.data[0].substring(8,10)+"일"]});
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
    });
  };

  getPredict = async Data => {
    //const getget = await axios.get('https://485stnblna.execute-api.ap-northeast-2.amazonaws.com/testapi');
    let result;
    await axios({
      method: "post",
      url:
        "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/predict",
      data: Data,
    })
      .then(function(response) {
        result = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    //
    //console.log(result);

    result.map(v => (v.value = v.value.split(",").map(x => +x)));
    result.map(v => v.value.map(x => parseInt(x)));
    this.setState({ productPredict: result });
    this.setOption();

    ////this.options.series = this.information.map(({value, name, id})=>({name:name, data:value, color:this.colors[id%10]}));
  };
  getPredictDate = async Data => {
    let result;
    await axios({
      method: "post",
      url:
        "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/predictdate",
      data: Data,
    })
      .then(function(response) {
        result = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });

    //console.log(result);
    this.setState({ datePredict: result });
    this.options.xAxis.categories = result;
  };
  //console.log(getget);
  componentDidMount = async () => {
    if (this.props.location.state === undefined && this.state.login === false) {
      this.props.history.push("/login");
    } else {
      this.setState({ login: true });
    }
    await this.getPredictDate(this.state.predictDateData);
    await this.getPredict(this.state.predictData);
    await this.getTotalDate(this.state.totalDate);
    this.setState({ isLoading: false });
  };
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
  options = {
    title: {
      text: "",
    },
    xAxis: {
      categories: this.state.datePredict,
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    chart: {
      type: "line",
      width: 780,
      height: "421",
      animation: false,
    },
    series: [
      {
        name: "",
        data: "",
      },
    ],
  };
  setOption = () => {
    this.options.series = [
      {
        name: this.state.productPredict[0].name,
        data: this.state.productPredict[0].value,
      },
    ];
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
  render() {
    const { isLoading, productPredict } = this.state;
    if (isLoading === false) {
      const p = JSON.parse(JSON.stringify(productPredict));
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
      //console.log(this.state.productPredict)
      //console.log(this.options);
      let itemHeight = 410 - 29.6 * this.state.isShow.length;
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
            <div className="stock-ready">
              <h1>재고 사전 준비</h1>
              <div className="first-row">
                <div className="stock-chart">
                  <div className="chart-name">재고 준비량</div>
                  <hr />
                  <div className="real-chart">
                    <Chart options={this.options} />
                  </div>
                </div>
                <div className="stockList">
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
              <div className="stock-table">
                <StockTableList
                  datePredict={this.state.datePredict}
                  productPredict={this.information}
                />
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

export default Stock;
