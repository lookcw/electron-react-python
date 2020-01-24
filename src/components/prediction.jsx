import React from 'react';
import {Row, Col} from 'react-bootstrap';


export default class Prediction extends React.Component {



    render() {
        return (
        <h1 className='prediction'>
        Patient is predicted to be {this.props.prediction} at a confidence level of&nbsp;<b>{this.props.conf * 100}%</b>
        </h1>
        )

    }
}