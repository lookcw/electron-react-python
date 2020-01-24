import React from 'react';
import ReactDom from 'react-dom'
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import EegHeatMap from './eeg-heatmap';
import FFTGraph from './fft-graph'
import { Container, Row, Col } from 'react-bootstrap'
import Prediction from './prediction'

export default class Results extends React.Component {


  constructor(props) {
    super(props);
    console.log(props)
  }


  render() {
    return (
      <div>
      <Container fluid className="results">
        <Row float="center">
        <Col className='heatmap' md={6}  >
        <EegHeatMap heatmap={this.props.heatmap} />
        </Col>
        <Col className='fft' md={6}>
        <FFTGraph data={this.props.fft} />
        </Col>
        </Row>
        <Prediction prediction={this.props.prediction} conf={this.props.conf}/>

      </Container>
      </div>
    )
  }
}