import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
// import SearchBar from './components/SearchBar'

class App extends Component {

state = {
  stocks: []
}

componentDidMount() {
  fetch('http://localhost:3000/stocks')
  .then(res => res.json())
  .then(stocks => this.setState({
    stocks: stocks
  }))
}

  handleClick = (id) => {
    this.setState({
      stocks: this.state.stocks.map(stock => {
       if(stock.id === id){
         return{...stock, owned: !stock.owned}
      }else{
        return stock
      }
      })
    })
    console.log("hi")

    
  }

  render() {
    console.log(this.state.stocks)
    const allStocks = this.state.stocks
    return (
      <div>
        <Header/>
        <MainContainer allStocks={allStocks} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
