import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.displayStocks.map(stock => <Stock stock={stock} key={stock.id} tradeStock={this.props.tradeStock}/>)}
      </div>
    );
  }
}

export default StockContainer;
