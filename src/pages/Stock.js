import React from "react";
//import axios from "axios";
import "./Stock.css";
import Navi from '../components/Navi'
import Header from '../components/Header'
import StockTable from '../components/StockTable'
import Chart from '../components/Chart'
//import StockList from '../components/StockList'
//https://www.popit.kr/%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-%EC%95%97-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%95%98%EC%9D%B4%EC%B0%A8%ED%8A%B8%EB%A1%9C-%EC%B0%A8%ED%8A%B8%EB%A5%BC-%EA%B7%B8%EB%A0%B8%EB%8A%94%EB%8D%B0-%EC%B0%A8/
class Stock extends React.Component {
  state = {
    isLoading: false,
    data : ['20년 04월 01일', '20년 08월 11일'],
    datePredict: ['8월 12일', '8월 13일', '8월 14일', '8월 15일', '8월 16일', '8월 17일', '8월 18일', '8월 19일', '8월 20일', '8월 21일'],
    productPredict : [{id: 0, name: '후라이드', value: [59, 64, 45, 40, 60, 61, 64, 65, 48, 50]}
    , {id: 1,name: '양념', value: [59, 64, 45, 40, 60, 61, 64, 65, 48, 50]}
    , {id: 2,name: '간장',value: [20,30,20,30,20,30,20,30,20,30]}
    , {id: 3,name: '후라이드 반 양념 반', value: [23,30,20,33,20,32,20,32,21,30]}
    , {id: 4,name: '땡초', value: [53,40,50,63,70,52,50,52,61,60]}
    , {id: 5,name: '소주', value: [44,44,44,34,20,32,34,32,41,30]}
    , {id: 6,name: '맥주', value: [23,30,20,33,20,32,20,32,21,30]}
    ],
    isOn:[{id:0, on:true},{id:1, on:false},{id:2, on:false},{id:3, on:false},{id:4, on:false},{id:5, on:false},{id:6, on:false},{id:7, on:false},{id:8, on:false},{id:9, on:false},{id:10, on:false},]
  };
  options = {
    title: {
      text: '',
    },
    xAxis: {
      categories: this.state.datePredict/*[
        'Apples',
        'Bananas',
        'Oranges',
        'Pineapples',
        'Blueberries',
      ],*/
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    chart: {
      type: 'line',
      width: 810,
      height: '421'
    },
    series: [
      {
        name: this.state.productPredict[0].name,
        data: this.state.productPredict[0].value,
      },
      /*
      {
        name: 'John',
        data: [5, 7, 3, 2, 4],
      },
      {
        name: 'Doe',
        data: [0, 0, 0, 1, 0],
      },
      */
    ]
  }
  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        <nav className="navi">
          <Navi />
        </nav>
        <section className="contents">
          <div className="header">
            {isLoading ? (<div className="loader">
              <span className="loader_text">Loading...</span>
              </div>):(
              <Header startDate={this.state.data[0]} lastDate={this.state.data[1]} />
            )}          
          </div>
          <div className="stock-ready">
            <h1>재고 사전 준비</h1>
            <div className="first-row">
              <div className="stock-chart">
                <div className="chart-name">재고 준비량</div><hr/>
                <Chart options={this.options} />
              </div>
              <div className="stockList">
                 <div className="listName">판매 제품</div><hr/>
                 <div>{this.state.productPredict.map(product =>{return(<div className='productName'>{product.name}<button>추가</button></div>)})}</div>
              </div>
            </div>
            <div className="stock-table">
                {isLoading ? (<div className="loader">
                <span className="loader_text">Loading...</span>
                </div>):(
                <StockTable datePredict={this.state.datePredict} productPredict={this.state.productPredict[0]} />
                )}
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Stock;