import React from 'react';
import ReactDom from 'react-dom'
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HeatMap from 'react-heatmap-grid'

var xLabels = new Array(21).fill(0).map((_, i) => `${i+1}`);
var yLabels = new Array(21).fill(0).map((_, i) => `${i+1}`);
const xLabelsVisibility = new Array(21)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

export default class EegHeatMap extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data:this.props.heatmap
        }
    }


    render() {
        console.log('rendering heatmap')
        console.log(this.props.heatmap)
        return (
            <div style={{ fontSize: "13px" }} >
                <h1 className='heatmap'>Synchrony Heatmap</h1>
            <HeatMap
              xLabels={xLabels}
              yLabels={yLabels}
              xLabelsLocation={"bottom"}
              yLabelsLocation={"right"}
              xLabelWidth={50}
              yLabelWidth={30}
              data={this.props.heatmap}
              onClick={(x, y) => alert(`Clicked ${x+1}, ${y+1}`)}
              height={20}
              squares
              cellStyle={(background, value, min, max, data, x, y) => ({
                background: `rgba(0, 151, 50, ${1 - (max - value) / (max - min)})`,
                fontSize: "1px",
                color: "#000"
              })}
              // cellRender={value => value && `${value}`}
            />
          </div>
          )
    }
}