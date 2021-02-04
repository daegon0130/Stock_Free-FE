import React from "react";
//import axios from "axios";
import "./Stock.css";
import Navi from "../components/Navi";
import Header from "../components/Header";
import StockTableList from "../components/StockTableList";
import Chart from "components/Chart";
import { SmallButton } from "../ui/SmallButton";

class Stock extends React.Component {
  state = {
    isLoading: true,
    date: [],
    datePredict: [],
    productPredict: [],
    isShow: [0],
    /*
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
    },*/
    predictDateData: {
      key: "datepredict",
    },
    login: false,
  };

  getTotalDate = async data => {
    // let result;
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/history",
    //   data: Data,
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    this.setState({
      date: [
        this.Data.totalDate[0].substring(2, 4) +
          "년 " +
          this.Data.totalDate[0].substring(5, 7) +
          "월 " +
          this.Data.totalDate[0].substring(8, 10) +
          "일",
        this.Data.totalDate[1].substring(2, 4) +
          "년 " +
          this.Data.totalDate[1].substring(5, 7) +
          "월 " +
          this.Data.totalDate[1].substring(8, 10) +
          "일",
      ],
    });
  };

  Data = {
    predictDate: [
      "11월 1일",
      "11월 2일",
      "11월 3일",
      "11월 4일",
      "11월 5일",
      "11월 6일",
      "11월 7일",
      "11월 8일",
      "11월 9일",
      "11월 10일",
    ],
    totalDate: ["2020-08-01", "2020-10-31"],
    predict: [
      {
        id: 1,
        name: "반반족발(대)",
        value: [1.92, 0.06, 0.93, 2.88, 0.09, 1.93, 0.06, 0.92, 0.91, 2.87],
      },
      {
        id: 2,
        name: "반반족발(중)",
        value: [1.1, 2.09, 1.09, 1.09, 0.09, 0.07, 0.06, 1.12, 1.09, 3.08],
      },
      {
        id: 3,
        name: "튀지(대)",
        value: [0.03, 0.03, 0.95, 0.03, 0.91, 0.03, 0.02, 0.97, 0.05, 0.04],
      },
      {
        id: 4,
        name: "튀지(중)",
        value: [0.05, 0.03, 1.06, 0.02, 0.03, 0.02, 0.02, 0.03, 0.04, 0.04],
      },
      {
        id: 5,
        name: "불튀족발(대)",
        value: [0.02, 0.01, 0.02, 0.02, 0.02, 0.98, 0.01, 0.02, 0.01, 0.01],
      },
      {
        id: 6,
        name: "불튀족발(중)",
        value: [0.02, 0.02, 0.02, 0.02, 1.05, 0.01, 0.02, 0.01, 0.02, 0.02],
      },
      {
        id: 7,
        name: "혼자먹는족발",
        value: [0.93, 0.89, 2.89, 0.92, 0.09, 0.06, 0.09, 0.09, 1.88, 0.07],
      },
      {
        id: 8,
        name: "막국수",
        value: [3.07, 1.14, 2.05, 2.06, 1.06, 2.06, 0.08, 1.06, 0.07, 0.98],
      },
      {
        id: 9,
        name: "등갈비튀김",
        value: [1.97, 0.95, 0.05, 0.04, 0.03, 0.02, 0.03, 0.04, 0.04, 0.04],
      },
      {
        id: 10,
        name: "쫄면",
        value: [0.04, 0.03, 0.04, 1.04, 0.03, 0.03, 0.03, 0.03, 0.05, 0.03],
      },
      {
        id: 11,
        name: "꼬막비빔밥",
        value: [0.02, 0.01, 0.01, 0.01, 0.02, 0.01, 0.02, 0.03, 0.01, 0.01],
      },
      {
        id: 12,
        name: "주먹밥",
        value: [0.07, 0.93, 1.89, 1.88, 0.92, 0.06, 0.05, 0.92, 1.92, 2.88],
      },
      { id: 13, name: "사천볶음밥", value: [0.01, 0, 0, 0, 0, 0, 0.01, 0.01, 1, 0] },
      {
        id: 14,
        name: "떡볶이",
        value: [0.01, 0.02, 1.03, 0.01, 0.01, 0, 0, 0.01, 0.01, 0.01],
      },
      {
        id: 15,
        name: "어묵탕",
        value: [0.01, 0.95, 0.01, 0, 0, 0, 0.01, 0, 0.01, 0],
      },
      { id: 16, name: "계란찜", value: [0, 0, 0, 0, 0.01, 0, 0, 0.01, 0.01, 0] },
      {
        id: 17,
        name: "콜라125",
        value: [2.06, 0.07, 0.06, 1.05, 0.05, 0.05, 0.06, 1.06, 0.05, 0.05],
      },
      {
        id: 18,
        name: "소주",
        value: [9.18, 2.22, 0.16, 3.17, 0.14, 0.08, 0.12, 0.16, 0.15, 5.13],
      },
      {
        id: 19,
        name: "참이슬후레쉬",
        value: [0.01, 0.01, 0, 0.01, 0.01, 0.01, 0.02, 0.01, 0, 0],
      },
      { id: 20, name: "진로이즈백", value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      {
        id: 21,
        name: "처음처럼",
        value: [2.01, 0.01, 0.01, 0, 0, 0.01, 0, 0, 0, 0],
      },
      { id: 22, name: "소주행사", value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      {
        id: 23,
        name: "맥주",
        value: [5.89, 1.78, 0.23, 0.2, 0.21, 0.15, 0.14, 0.19, 0.82, 0.2],
      },
      { id: 24, name: "테라병", value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      {
        id: 25,
        name: "테라생맥주1000cc",
        value: [0.03, 0.02, 0.02, 0.01, 0.02, 0.02, 0.02, 0.04, 0.02, 0.01],
      },
      { id: 26, name: "생맥주300cc", value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      {
        id: 27,
        name: "생맥주500cc",
        value: [3.26, 0.05, 0.06, 0.06, 0.06, 0.08, 0.06, 20.22, 0.04, 0.03],
      },
      {
        id: 28,
        name: "생맥주1000cc",
        value: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0, 0],
      },
      { id: 29, name: "생맥주2700cc", value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      {
        id: 30,
        name: "음료수",
        value: [0.92, 0.04, 0.06, 1.94, 0.08, 2.95, 0.04, 0.04, 0.94, 0.95],
      },
      { id: 31, name: "콜라500ml", value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { id: 32, name: "칠성사이다125L", value: [0, 0, 0, 0, 0, 0, 0, 0, 1.01, 0] },
      { id: 33, name: "환타파인애플355ml", value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { id: 34, name: "공기밥", value: [0, 0, 0, 0, 0.02, 0, 0, 0, 0, 0] },
    ],
  };

  getPredict = async data => {
    let result;
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/predict",
    //   data: Data,
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    result = this.Data.predict;

    for (var i in result) {
      result[i].id -= 1;
    }
    console.log(result);
    // result.map(v => (v.value = v.value.split(",").map(x => +x)));
    // result.map(v => v.value.map(x => parseInt(x)));
    this.setState({ productPredict: result });
    this.setOption();
  };
  getPredictDate = async data => {
    // let result;
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/predictdate",
    //   data: Data,
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    this.setState({ datePredict: this.Data.predictDate });
    this.options.xAxis.categories = this.Data.predictDate;
  };

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
      height: "446",
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
  };
  handleRemoveChange = data => {
    const show = this.state.isShow;
    this.setState({
      isShow: show.filter(info => info !== data),
    });
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
                          <SmallButton
                            onClick={() => this.handleRemoveChange(v.id)}
                            label = "제거"
                            css = {{ backgroundColor : '#c4183c' }}
                          />
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
                          <SmallButton
                            onClick={() => this.handleAddChange(product.id)}
                            label = "추가"
                          />
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
