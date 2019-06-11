import React, { Component } from "react";
import Ticker from "react-ticker";

class Stocks extends Component {
  state = {
    stocksticker:
      "AAPL:UW: $195.52 AXP:UN: $124.29 BA:UN: $351.58 CAT:UN: $127.88 CSCO:UW: $57.245 CVX:UN: $122.31 DIS:UN: $132.42 GE:UN: $10.09 GS:UN: $194.94 HD:UN: $197.92 IBM:UN: $135.98 INTC:UW: $46.65 JNJ:UN: $140.08 JPM:UN: $111.305 KO:UN: $51.325 MCD:UN: $201.7 MMM:UN: $169 MRK:UN: $82.99 MSFT:UW: $132.62 NKE:UN: $83.59 PFE:UN: $43.105 PG:UN: $109.07 TRV:UN: $149.26 UNH:UN: $249.36 UTX:UN: $124.19 V:UN: $170.55 VZ:UN: $56.62 WMT:UN: $108.64 XOM:UN: $75.495 DWDP:UN: $30.505",
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
      x => `${x.security.exchange_ticker}: $${x.last_price}`
    );
    this.setState({ stocksticker: stock.join(" ") });
  };

  showStocks = () => {
    return this.state.stocksticker;
  };

  render() {
    return (
      <div className="stocks">
        <Ticker>{() => this.showStocks()}</Ticker>
        {/* {console.log(this.state.stocksticker)} */}
      </div>
    );
  }
}

export default Stocks;
