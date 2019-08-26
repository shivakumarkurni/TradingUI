import React, { Component } from 'react';
import axios from 'axios';

class ListStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: [],

        }
    }

    componentDidMount() {
        console.log(this.props.match)
        axios.get(`http://10.117.189.137:9093/trading/trading/stocks`).then((response) => {
            this.setState({ data: response.data })
        }).catch((error) => {
            console.log(error.message)
        });
    }


    buyStockHandler = (item) => {
        console.log(item);
        sessionStorage.setItem("item", JSON.stringify(item));
       this.props.history.push(`/placeOrder`)
    }

    confirmedStocks = () => {
        
        this.props.history.push(`/confirmStocks`)
    }

    cancelledStocks = () => {
    
        this.props.history.push(`/cancelledStocks`)
    }

    trendingStocks = () => {
        this.props.history.push(`/trendingStocks`)
    }

    render() {
        console.log(this.state.modal)
        return (
            <div className="row">
                <div className="container header-title">
                    <span className="list-title">List of Stocks</span>                   
                    <button className="cancel-btn" onClick={this.cancelledStocks}>Cancelled Stocks</button>
                    <button className="cancel-btn" onClick={this.trendingStocks}>Trending Stocks</button>
                    <button className="cancel-btn" onClick={this.confirmedStocks}>Confirmed Stocks</button>                    
                </div>
                <div className="col-md-2"></div>
                <div className="container title col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="header-text">Stock Name</th>
                                <th scope="col" className="header-text">Price (Prev.Close)</th>
                                <th scope="col" className="header-text">Quantity</th>
                                <th scope="col" className="header-text">Sector Name</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="header-text">{item.stockName}</td>
                                        <td className="header-text">{item.stockPrice}</td>
                                        <td className="header-text">{item.stockQuantity}</td>
                                        <td className="header-text">{item.stockSector}</td>
                                        <td><button onClick={() => this.buyStockHandler(item)}>Buy</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListStocks;