import React from 'react';
import './StockTable.css';

function StockTable({ datePredict, productPredict }){
    const colors= ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
    const ID = productPredict.id %10
    const color = colors[ID]
    return(
    <div className="stockTable">
        <div className="product"><div className="stick1" style={{background: color,}}></div>&nbsp;{ productPredict.name }&nbsp;재고 준비량</div><hr/>
        <div className="roww">
        <div className="stick3"  style={{background: color,}}></div>
        <div className="table">
            <table border='0'>
                <thead>
            <tr>
                <td className="c1"> 예측 범위</td>
                {datePredict.map(v=>{return(<td key={v}>{v}</td>)})}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="percent c1">110%</td>
                {productPredict.value.map(v=>{return(<td>{Math.round(v*1.1)}</td>)})}
            </tr>
            <tr>
                <td className="percent c1">100%</td>
                {productPredict.value.map(v=>{return(<td>{Math.round(v)}</td>)})}
            </tr>
            <tr>
                <td className="percent c1">90%</td>
                {productPredict.value.map(v=>{return(<td>{Math.round(v*0.9)}</td>)})}
            </tr>
            </tbody>
        </table>
        </div>
        </div>
    </div>
    );
}

export default StockTable;