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
                <td>{ datePredict[0] }</td>
                <td>{ datePredict[1] }</td>
                <td>{ datePredict[2] }</td>
                <td>{ datePredict[3] }</td>
                <td>{ datePredict[4] }</td>
                <td>{ datePredict[5] }</td>
                <td>{ datePredict[6] }</td>
                <td>{ datePredict[7] }</td>
                <td>{ datePredict[8] }</td>
                <td>{ datePredict[9] }</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="percent">110%</td>
                <td>{ Math.round(productPredict.value[0]*1.1) }</td>
                <td>{ Math.round(productPredict.value[1]*1.1) }</td>
                <td>{ Math.round(productPredict.value[2]*1.1) }</td>
                <td>{ Math.round(productPredict.value[3]*1.1) }</td>
                <td>{ Math.round(productPredict.value[4]*1.1) }</td>
                <td>{ Math.round(productPredict.value[5]*1.1) }</td>
                <td>{ Math.round(productPredict.value[6]*1.1) }</td>
                <td>{ Math.round(productPredict.value[7]*1.1) }</td>
                <td>{ Math.round(productPredict.value[8]*1.1) }</td>
                <td>{ Math.round(productPredict.value[9]*1.1) }</td>
            </tr>
            <tr>
                <td className="percent">100%</td>
                <td>{ productPredict.value[0] }</td>
                <td>{ productPredict.value[1] }</td>
                <td>{ productPredict.value[2] }</td>
                <td>{ productPredict.value[3] }</td>
                <td>{ productPredict.value[4] }</td>
                <td>{ productPredict.value[5] }</td>
                <td>{ productPredict.value[6] }</td>
                <td>{ productPredict.value[7] }</td>
                <td>{ productPredict.value[8] }</td>
                <td>{ productPredict.value[9] }</td>
            </tr>
            <tr>
                <td className="percent">90%</td>
                <td>{ Math.round(productPredict.value[0]*0.9) }</td>
                <td>{ Math.round(productPredict.value[1]*0.9) }</td>
                <td>{ Math.round(productPredict.value[2]*0.9) }</td>
                <td>{ Math.round(productPredict.value[3]*0.9) }</td>
                <td>{ Math.round(productPredict.value[4]*0.9) }</td>
                <td>{ Math.round(productPredict.value[5]*0.9) }</td>
                <td>{ Math.round(productPredict.value[6]*0.9) }</td>
                <td>{ Math.round(productPredict.value[7]*0.9) }</td>
                <td>{ Math.round(productPredict.value[8]*0.9) }</td>
                <td>{ Math.round(productPredict.value[9]*0.9) }</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    );
}

export default StockTable;