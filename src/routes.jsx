import React, { Component } from 'react';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import App from './components/App';
import Results from './components/results';
import Home from './components/home';




export default class Routes extends Component {

    render() {
        return (
            <BrowserRouter >
                <Route path='/' component={App} />
                <Route path='results' component={Results} />
            </BrowserRouter>
        );
    }
}