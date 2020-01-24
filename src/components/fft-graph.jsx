import React from 'react'
import { Chart } from 'react-charts'

export default class FFTGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            axes: [
                { primary: true, type: 'linear', position: 'bottom' },
                { type: 'linear', position: 'left' }
            ]
        }
    }
    
    render() {
        return (
            <div style={{
                width: '500px',
                height: '520px'
            }}>
                <h1 className='fft'>FFT</h1>
                <Chart className='chart' data={this.props.data} axes={this.state.axes} tooltip />
            </div>
        )
    }

}