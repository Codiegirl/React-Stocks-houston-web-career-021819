import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>

        <h2>Stocks</h2>
        {this.props.unStocks.map(stock => (
           <Stock
          {...stock}
          handleClick={this.props.handleClick}/>
        ))}
        
          
        
      </div>
    );
  }

}

export default StockContainer;
