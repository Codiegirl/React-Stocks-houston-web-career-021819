import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'




class MainContainer extends Component {

  render() {

    const names = [...this.props.allStocks]//this is refering to the array of hogs
            allStocks = names.sort((a, b) => (a.name > b.name) ? 1 : -1)
            console.log(allStocks)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">
            <div>
              
              <StockContainer unStocks={this.props.allStocks.filter(stock => !stock.owned)} handleClick={this.props.handleClick}/>
             
              </div>
            </div>
            <div className="col-4">

              <PortfolioContainer ownedStocks={this.props.allStocks.filter(stock => stock.owned)} handleClick={this.props.handleClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
