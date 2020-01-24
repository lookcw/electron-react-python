import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, HashRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'

ReactDOM.render( < HashRouter > < App / > < /HashRouter>,
    document.getElementById('root')
);