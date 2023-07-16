import React, {PureComponent, Component} from "react";
import './Wallet.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class Btc extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
  constructor(props){
  super(props)
    this.state = {
        investment:'',
        graphdata:[]
    }
  }

componentDidMount() {
    fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&precision=6`)
    .then(response => response.json())
    .then (data => {
      const prices = data.prices;
      const formattedData = prices.map(price => {
        const [timestamp, value] = price;
        const date = new Date(timestamp).toLocaleDateString('en-us')
        return{date, value};
      });
      this.setState({graphdata: formattedData});
    })
      .catch(err => console.log(err))

    const email = this.props.user.email
    if (email) {
        fetch('https://bithash-server.onrender.com/btc',{
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            email: email,
        })
    }).then(response => response.json())
    .then(data => this.setState({investment:data}))
  }
}

render(){
  return(
        <>
        <div className="area-chart">
           <AreaChart
            width={400}
              height={320}
              data={this.state.graphdata}
              margin={{
                top: 10,
                right: 15,
                left: 20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#0A0AF8" />
            </AreaChart>
            <div className="balance-box">
                  <div>
                    welcome {this.props.user.name} your account summary for    {new Date().toLocaleDateString('en-us')}
                  </div><br/>
                <div className="balance-details">
                  <div className="div7">
                    <div className="label">Initial Deposit
                    </div>
                    <h3>{this.state.investment.deposit}</h3>
                  </div>
                  <div className="div7">
                      <div className="label">Total Balance
                      </div>
                      <h3>{this.state.investment.totalbalance}</h3>
                  </div>
                   <div className="div7">
                    <div className="label">Accumulated<br/> balance
                    </div>
                    <h3>{this.state.investment.dailyprofit}</h3>
                  </div>
                  </div>
                </div>
            </div>
            </>
      )
}

}

export default Btc