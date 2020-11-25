import React from "react";
//import axios from "axios";
import "./Home.css";
import Navi from '../components/Navi'
import Header from '../components/Header'
import Chart from '../components/Chart'
import coreimg from '../images/핵심 제품.svg'

class Home extends React.Component {
  
    state = {
      isLoading: false,
      date : ['20년 04월 01일', '20년 08월 11일'],
      datePredict: ['8월 12일', '8월 13일', '8월 14일', '8월 15일', '8월 16일', '8월 17일', '8월 18일', '8월 19일', '8월 20일', '8월 21일'],
      productPredict : [{id: 0, name: '후라이드', value: [59, 64, 45, 40, 60, 61, 64, 65, 48, 50]}
      , {id: 1,name: '양념', value: [50, 63, 41, 44, 60, 62, 64, 67, 40, 50]}
      , {id: 2,name: '간장',value: [20,30,20,30,20,30,20,30,20,30]}
      , {id: 3,name: '후라이드 반 양념adasdasdas 반', value: [23,30,20,33,20,32,20,32,21,30]}
      , {id: 4,name: '땡초', value: [53,40,50,63,70,52,50,52,61,60]}
      , {id: 5,name: '소주', value: [44,44,44,34,20,32,34,32,41,30]}
      ],
      productSales: [{id: 0, name: '후라이드', value: [59, 64, 45, 40, 60, 61, 64, 65, 48, 50]}
      , {id: 1,name: '양념', value: [50, 63, 41, 44, 60, 62, 64, 67, 40, 50]}
      , {id: 2,name: '간장',value: [20,30,20,30,20,30,20,30,20,30]}
      , {id: 3,name: '후라이드 반 양념adasdasdas 반', value: [23,30,20,33,20,32,20,32,21,30]}
      , {id: 4,name: '땡초', value: [53,40,50,63,70,52,50,52,61,60]}
      , {id: 5,name: '소주', value: [44,44,44,34,20,32,34,32,41,30]}
      ],
      isShow: [0],
      showMenu: false,
      core: 0,
    };
    showMenu = this.showMenu.bind(this);
    closeMenu = this.closeMenu.bind(this);
  colors= ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
  information=[]
  notShow=[]
  smallOptions = {
    title: {
      text: '',
    },
    xAxis: {
      //categories: this.state.datePredict,
      labels: {
        enabled: false
    },
    //maxPadding: 0,
    //left:0,
    //    margin:0,
    //startOnTick: false,
    minPadding: 0 ,
    //endOnTick: false,
    maxPadding: 0
    //type: 'datetime'
    },
    yAxis: {
      title: {
        text: '',
      },
      //maxPadding: 0,
      //startOnTick: false,
    //minPadding: 0 ,
      //startOnTick: false,
      labels: {
        enabled: false
      },
      //pointStart: Date.UTC(2010, 0, 1),
      //pointInterval: 3 * 24 * 3600 * 1000
      //https://jsfiddle.net/7c9st0gp/2/
    },
    chart: {
      type: 'areaspline',
      width: 310,
      height: 84,
      margin: 0
    },
    legend: {
      enabled: false
    },
    series: [
      {
        data: this.state.productSales[0].value,
        marker: { radius: 0 },
        name: this.state.productSales[0].name,
        dashStyle: 'shortdash'
      },
    ]
  }
  options = {
    title: {
      text: '',
    },
    xAxis: {
      //categories: this.state.datePredict,
      /*[
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
        pointStart: Date.UTC(2020, 7, 12),
        pointInterval: 24 * 3600 * 1000
        //pointStart: -1,
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
  showMenu(event){
    event.preventDefault();

    this.setState({showMenu: true}, ()=>{
      document.addEventListener('click', this.closeMenu);
    })
  }
  closeMenu(){
    this.setState({showMenu: false}, ()=>{
      document.removeEventListener('click', this.closeMenu);
    })
  }
  setCore=(id)=>{
    this.setState({core: id})
  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  render() {
    const { isLoading, productPredict } = this.state;

    if(isLoading===false){
      const p = JSON.parse(JSON.stringify(productPredict));
      this.information = p.filter(product => this.state.isShow.indexOf(product.id)!==-1);
      this.notShow = p.filter(product => this.state.isShow.indexOf(product.id)===-1);
      this.options.series = this.information.map(({value, name, id})=>({name:name, data:value, color:this.colors[id%10]}));
      const q = JSON.parse(JSON.stringify(productPredict));
      const coreSales = q.filter(product => this.state.core===product.id);
      this.smallOptions.series= coreSales.map(({value, name, id})=>({name:name, data:value}));
      const daySales = JSON.parse(JSON.stringify(this.smallOptions));
      daySales.series[0].color = '#000';
      const daySum =this.average(daySales.series[0].data);
      //console.log(this.information)
      //console.log(this.state.productPredict)
      console.log(this.options.series)
      const coreProduct= p[this.state.core].name;
      return (
      <section className="container">
        <nav className="navi">
          <Navi />
        </nav>
        <section className="contents">
          <div className="header">
              <Header startDate={this.state.date[0]} lastDate={this.state.date[1]} />
          </div>
          <div className="sales-history">
            <h1>판매 추이</h1>
            <div className="first-row">
              <div className="product-select">
                <h5>핵심 제품</h5>
                <div className="coreProduct">{coreProduct}</div>
                <div className="product-menu" >
                  <button className='menu' onClick={this.showMenu}>Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;<img src={coreimg} alt="logo"/></button>
                  {this.state.showMenu
                  ?(
                    <div className="button-menu">
                    {p.map(v=>{return <button onClick={() => this.setCore(v.id)}>{v.name}</button>})}
                    </div>
                  ) : (null)
                  }
                  
                </div>
              </div>
              <div className="dayChart">
                <h5>일별 판매량</h5>
                <div className="chartSales">{this.numberWithCommas(daySum)}</div>
                <div className="small-chart"><Chart options={daySales} /></div>
              </div>
              <div className="weekChart">
                <h5>주별 판매량</h5>
                <div className="chartSales">{this.numberWithCommas(4211)}</div>
                <div className="small-chart"><Chart options={this.smallOptions} /></div>
              </div>
              <div className="monthChart">
                <h5>월별 판매량</h5>
                <div className="chartSales">{this.numberWithCommas(4211)}</div>
                <div className="small-chart"><Chart options={this.smallOptions} /></div>
              </div>
            </div>
            <div className="second-row">
              <div className="sales-chart">
                <div className="chart-name">판매량 추이</div><hr/>
                <div className="selectSpace">
                  l
                </div><hr/>
                <div className="real-chart"><Chart options={this.options} /></div>
              </div>
              <div className="salesList">
                <div className="listName">판매 제품</div><hr/>
                <div className="productShowSpace">
                  {this.information.map(v => {return <div className="productShow">{v.name}<button onClick={() => this.handleRemoveChange(v.id)}>제거</button></div>})}
                </div><hr/>
                <div className="productNotShowSpace">
                  {this.notShow.map(product =>{return(<div className='productNotShow'>{product.name}<button onClick={() => this.handleAddChange(product.id)}>추가</button></div>)})}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
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

export default Home;