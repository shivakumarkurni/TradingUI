import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class ConfirmationPage extends Component {

    back = () => {
        this.props.history.push(`/confirmStocks`)
    }
    render() {
        return (
            <div>
                <div className="container header-title">

                    <button className="cancel-btn" onClick={this.back}>Confirmed Stocks</button>
                </div>
                <div className="row container">
                    <div className="col-md-4"></div>
                    <div className="col-md-6">Order Confirmed Successfully @ NSE.... OrderId for Settlement Number: 20192020</div>
                </div>
            </div>


        )
    }
}
export default ConfirmationPage;