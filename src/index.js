import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configStore from './store/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configStore();

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

