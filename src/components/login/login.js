import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                mobileNo: '',
                password: '',
            },
            notification: ''
        }
    }

    handleChange = (event) => {
        const { loginData } = this.state;
        loginData[event.target.name] = event.target.value;
        console.log(loginData);
    }

    login = () => {
        const { loginData } = this.state;
        axios.post('http://10.117.189.137:9093/trading/trading/login', loginData).then( (response) =>{
            console.log(response, loginData);
            localStorage.setItem("userId", response.data.userId);
            this.props.history.push(`/listOfStocks`)
        }).catch((err)=> {
            alert("Log in unsuccessful");
            console.log(err);
        })
    }

   

    render() {
        return (
            <div className="row container">
                <div className="col-md-4"></div>
                <div className="box col-md-4 box-cont">
                   

                    <div className="form-group">
                        <label>Mobile Number</label><br />
                        <input type="text" id="mobile" className="form-control col-sm-10" placeholder="Enter Mobile No" name="mobileNo" required onChange={this.handleChange} />
                    </div>
                    <div className="form-group login-pass-field">
                        <label>Password</label><br />
                        <input type="password" id="password" className="form-control col-sm-10" placeholder="password" name="password" required onChange={this.handleChange} />
                    </div>
                    <label></label><br />
                    <button type="button" id="button" className="btn btn-info login-btn" onClick={this.login}>Login</button>
                </div>
               

            </div>
        )
    }
}
export default Login;