import React, { Component } from "react";
import Ticker from "react-ticker";

class Stocks extends Component {
  state = {
    stocksticker: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
    stocks: []
  };

  componentDidMount() {
    fetch(
      "https://api-v2.intrinio.com/stock_exchanges/USCOMP/prices/realtime?source=iex&api_key=OjY0YWUxZDljM2ZhMjY4NDA2Zjg3ZDE1Njc5ZTRkN2Iw"
    )
      .then(resp => resp.json())
      .then(x =>
        this.setState({ stocks: x.stock_prices }, () => this.joinStocks())
      );
  }

  joinStocks = () => {
    let stock = this.state.stocks.map(
      x => `${x.security.exchange_ticker}: \xa0 $${x.last_price}`
    );
    this.setState({
      stocksticker: stock.join(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`)
    });
  };

  showStocks = () => {
    return this.state.stocksticker;
  };

  render() {
    return (
      <div className={this.props.stocksClass}>
        <Ticker>{() => this.showStocks()}</Ticker>
        {/* {console.log(this.state.stocksticker)} */}
      </div>
    );
  }
}

export default Stocks;
