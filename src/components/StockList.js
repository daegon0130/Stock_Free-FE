import React from 'react';
import StockTable from './StockTable'
import './StockList.css';

function StockList({ datePredict, productPredict }){
    const onclickEnter = () =>{
        return(<StockTable datePredict productPredict/>)
    };
    return(
    <div className="stockList">
        <div className="listName">판매 제품</div><hr/>
    
    <div>{productPredict.map(product =>{return(<div className='productName'>{product.name}<button>추가</button></div>)})}</div>
    </div>
    );
}

export default StockList;