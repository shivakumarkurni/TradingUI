import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios';

export default class TrendindStock extends PureComponent {
  constructor() {
    super()
    this.state = {
      trendingStockList: []
    }
  }
  componentDidMount() {

    this.getData().then(response => {
      console.log(response.data)
      this.setState({ trendingStockList: response.data });
    });


  }
  getData = () => {


    return new Promise((resolve, reject) => {
      axios.get('http://10.117.189.137:9093/trading/topStocks').then((response) => {
        resolve(response);
        console.log(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  back = () => {
    this.props.history.push(`/listOfStocks`)
  }



  render() {
    return (
      <div className="row">
        <div className="container header-title">
          <span className="graph">Top Trending Stocks</span>
          <button className="cancel-btn" onClick={this.back}>Back</button>


          <BarChart
            width={500}
            height={300}
            data={this.state.trendingStockList}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stockName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stockId" fill="#696969" />
          </BarChart>
        </div>
      </div>
    );
  }
}


