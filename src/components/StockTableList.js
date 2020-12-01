import React from 'react';
import StockTable from './StockTable'

class StockTableList extends React.Component {
    static defaultProps = {
        datePredict : {},
        productPredict : [],
        list: [],
      }
    render(){
        const { datePredict, productPredict } = this.props;
        const list = productPredict.map(
        (info) => (<StockTable key={info.id} datePredict={datePredict} productPredict = {info}/>)
        );
       // console.log({list})
        return (
            <div>
                {list}
            </div>
          );
    }
}

export default StockTableList;