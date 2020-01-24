import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Results from './results'
import UploadPage from './upload-page'

var selectedTab;

function zip(a, b) {
  return a.map(function (e, i) {
    return [e, b[i]];
  });
}

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      prediction: null,
      conf: null,
      heatmap: new Array(10)
        .fill(0)
        .map(() =>
          new Array(10).fill(0)
        ),
      fft: { 'freq': [], 'yfMat': [] }
    }
    this.setPred = this.setPred.bind(this)
  }

  setPred(predData) {
    let fft = predData.fft
    let zipped_ffts = fft.yfMat.map(x => zip(fft.freq, x))
    zipped_ffts = zipped_ffts.map((x, i) => { return { label: `e${fft.electrodes[i]}`, data: x } })
    this.setState({
      prediction: predData.prediction,
      conf: predData.conf,
      heatmap: predData.heatmap,
      fft: zipped_ffts
    })
  }



  render() {
    return (
      <div>
        <Route exact path="/"><UploadPage setPred={this.setPred} /></Route>
        <Route path="/results">
          <Results prediction={this.state.prediction}
            conf={this.state.conf}
            heatmap={this.state.heatmap}
            fft={this.state.fft} />
        </Route>
      </div>
    );
  }
}

export default withRouter(App);