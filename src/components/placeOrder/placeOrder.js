import React, { Component } from 'react';
import axios from 'axios';

class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseId: 0,
            posts: [],
            item: JSON.parse(sessionStorage.getItem('item')),
            formData: {
                stockQuantity: 1
            },
            stockQuantity: 1

        }
    }

    componentDidMount() {
        let item = this.state.item
        console.log(item)
        axios.post('http://10.117.189.137:9093/trading/stock', {
            "flag": 0,
            "stockId": item.stockId,
            "stockQuantity": 1,
            "userId": 1
        }).then(data => {
            console.log(data);
            this.setState({ posts: data.data, purchaseId: data.data.purchaseId });

        });
    }

    buyStock = () => {
        console.log();
        axios.put('http://10.117.189.137:9093/trading/stock', {
            "flag": 1,
            "purchaseId": this.state.purchaseId,
            "stockQuantity": this.state.stockQuantity

        }).then(data => {
            console.log(data);
            alert(data.data.currentAmount)


            this.props.history.push(`/confirmPage`)
        });
    }

    handleChange = (e) => {
        this.setState({ stockQuantity: e.target.value })
    }

    cancelStock = () => {
        console.log();
        axios.put('http://10.117.189.137:9093/trading/stock', {
            "flag": 2,
            "purchaseId": this.state.purchaseId,
            "stockQuantity": this.state.stockQuantity
        }).then(data => {
            console.log(data);

        });
    }

    back = () => {
        this.props.history.push(`/listOfStocks`)
      }

    render() {
        return (
            <div className="container">
                <span className="list-title">Confirm the Order</span>
                <button className="cancel-btn" onClick={this.back}>Back</button>
                <div className="form-group">
                    <label>Stock Name :</label>
                    {this.state.item.stockName}
                </div>

                <div className="form-group">
                    <label>Market Price: </label>
                    {this.state.item.stockPrice}
                </div>

                <div className="form-group">
                    <label>Enter Quantity: </label>
                    <input type="text" className="form-control" placeholder="Enter Quantity" name="stockQuantity" required onChange={this.handleChange} />
                </div>

                {/* <div className="form-group">
                    <label>Brokerage Fee :</label>
                    {this.state.item.brokarage}
                </div> */}

                <button onClick={this.buyStock}>Confirm</button>
                <button onClick={this.cancelStock}>Cancel</button>
            </div>
        )
    }
}
export default PlaceOrder