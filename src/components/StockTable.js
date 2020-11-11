import React from 'react';
import './StockTable.css';

function StockTable({ datePredict, productPredict }){
    return(
    <div className="stockTable">
        <div className="product"><div className="stick1"></div>&nbsp;{ productPredict.name }&nbsp;재고 준비량</div><hr/>
        <div className="table">
            <table border='0'>
                <thead>
            <tr>
                <td> 예측 범위</td>
                {datePredict.map(v=>{return(<td>{v}</td>)})}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="percent">110%</td>
                {productPredict.value.map(v=>{return(<td>{Math.round(v*1.1)}</td>)})}
            </tr>
            <tr>
                <td className="percent">100%</td>
                {productPredict.value.map(v=>{return(<td>{Math.round(v)}</td>)})}
            </tr>
            <tr>
                <td className="percent">90%</td>
                {productPredict.value.map(v=>{return(<td>{Math.round(v*0.9)}</td>)})}
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    );
}

export default StockTable;