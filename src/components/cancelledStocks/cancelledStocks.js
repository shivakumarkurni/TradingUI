import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class CancelledStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }

    componentDidMount() {
        this.getData().then(response => {
            console.log([response.data]);
            this.setState({ data: response.data });
        });
    }
    getData = (item) => {
        console.log(item);
        return new Promise((resolve, reject) => {
            var userId = localStorage.getItem("userId");
            axios
                .get("http://10.117.189.137:9093/trading/purchased/" + userId + "/status/CANCEL")
                .then(response => {
                    resolve(response);
                    console.log(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };


    back = () => {
        this.props.history.push(`/listOfStocks`)
    }

    render() {
        return (
            <div className="row">
                <div className="container header-title">
                    <span className="list-title">List of Cancelled Stocks</span>
                    <button className="cancel-btn" onClick={this.back}>Back</button>
                </div>
                <div className="col-md-2"></div>
                <div className="container title col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="header-text">Stock Name</th>
                                <th scope="col" className="header-text">Current Price </th>
                                <th scope="col" className="header-text">Quantity</th>
                                <th scope="col" className="header-text">Purchased Date</th>

                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="header-text">{item.stockName}</td>
                                        <td className="header-text">{item.amount}</td>
                                        <td className="header-text">{item.stockQuantity}</td>
                                        <td className="header-text">{item.purchaseDate}</td>
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
export default CancelledStocks;