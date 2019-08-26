import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../src/components/login/login'
import ListStocks from '../src/components/listStocks/listStocks'





function App() {
  return (
    <HashRouter>
   
      <div>
        <nav className="navbar navbar-default trade-nav">
          <div className="container-fluid">
            <div className="navbar-header">
              <div>ABC Trading</div>
            </div>
          </div>
        </nav>

       


        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/listOfStocks" component={ListStocks} />

        </Switch>
      </div>
  

      </HashRouter>
  );
}

export default App;
