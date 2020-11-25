import React from "react";
//import axios from "axios";
import "./Stock.css";
import Navi from '../components/Navi'
import Header from '../components/Header'
import StockTableList from '../components/StockTableList'
import Chart from '../components/Chart'
//import StockList from '../components/StockList'
//https://www.popit.kr/%EC%A2%8C%EC%B6%A9%EC%9A%B0%EB%8F%8C-%EC%95%97-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%95%98%EC%9D%B4%EC%B0%A8%ED%8A%B8%EB%A1%9C-%EC%B0%A8%ED%8A%B8%EB%A5%BC-%EA%B7%B8%EB%A0%B8%EB%8A%94%EB%8D%B0-%EC%B0%A8/
class Stock extends React.Component {
  state = {
    isLoading: false,
    data : ['20년 04월 01일', '20년 08월 11일'],
    datePredict: ['8월 12일', '8월 13일', '8월 14일', '8월 15일', '8월 16일', '8월 17일', '8월 18일', '8월 19일', '8월 20일', '8월 21일'],
    productPredict : [{id: 0, name: '후라이드', value: [59, 64, 45, 40, 60, 61, 64, 65, 48, 50]}
    , {id: 1,name: '양념', value: [50, 63, 41, 44, 60, 62, 64, 67, 40, 50]}
    , {id: 2,name: '간장',value: [20,30,20,30,20,30,20,30,20,30]}
    , {id: 3,name: '후라이드 반 양념 반', value: [23,30,20,33,20,32,20,32,21,30]}
    , {id: 4,name: '땡초', value: [53,40,50,63,70,52,50,52,61,60]}
    , {id: 5,name: '소주', value: [44,44,44,34,20,32,34,32,41,30]}
    ],
    isShow: [0]
  };
  colors= ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
  information=[]
  notShow=[]
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
  handleAddChange=(data)=>{
    const show = this.state.isShow;
    this.setState({
      isShow: Array.from(new Set(show.concat(data)))
    })
    //console.log(this.state.isShow)
  }
  handleRemoveChange=(data)=>{
    const show = this.state.isShow;
    this.setState({
      isShow: show.filter(info=> info !== data)
    })
    //console.log(this.state.isShow)
  }
  render() {
    const { isLoading, productPredict } = this.state;
    if(isLoading===false){
      const p = JSON.parse(JSON.stringify(productPredict));
      this.information = p.filter(product => this.state.isShow.indexOf(product.id)!==-1);
      this.notShow = p.filter(product => this.state.isShow.indexOf(product.id)===-1);
      this.options.series = this.information.map(({value, name, id})=>({name:name, data:value, color:this.colors[id%10]}));
      //console.log(this.information)
      //console.log(this.state.productPredict)
      console.log(this.options.series)
    return (
      <section className="container">
        <nav className="navi">
          <Navi />
        </nav>
        <section className="contents">
          <div className="header">
            <Header startDate={this.state.data[0]} lastDate={this.state.data[1]} />          
          </div>
          <div className="stock-ready">
            <h1>재고 사전 준비</h1>
            <div className="first-row">
              <div className="stock-chart">
                <div className="chart-name">재고 준비량</div><hr/>
                <div className="real-chart"><Chart options={this.options} /></div>
              </div>
              <div className="stockList">
                <div className="listName">판매 제품</div><hr/>
                <div className="productShowSpace">
                  {this.information.map(v => {return <div className="productShow">{v.name}<button onClick={() => this.handleRemoveChange(v.id)}>제거</button></div>})}
                </div><hr/>
                <div className="productNotShowSpace">
                  {this.notShow.map(product =>{return(<div className='productNotShow'>{product.name}<button onClick={() => this.handleAddChange(product.id)}>추가</button></div>)})}
                </div>
              </div>
            </div>
            <div className="stock-table">
                <StockTableList datePredict={this.state.datePredict} productPredict={this.information} />
            </div>
          </div>
        </section>
      </section>
    );
                }
  else{
    return(
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