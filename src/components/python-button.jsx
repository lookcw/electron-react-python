// Libraries
import React from 'react';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

class PythonButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = { isExecuted: false, output: '' }
    this.execute_python = this.execute_python.bind(this)
    this.button_press = this.button_press.bind(this)
  }


  getPythonOutput() {
    var path = require("path")

    var options = {
      scriptPath: path.join(__dirname, '../../python/'),
      args: [this.props.path],
      mode: 'json'
    }
    const { PythonShell } = require("python-shell");
    var outer_this = this;
    var shell = new PythonShell('main.py', options); //executes python script on python3
    let promise = new Promise((res, rej) => shell.on('message', function (message) {
      res(message)
    }))
    return promise;
  }

  async execute_python() {
    var python_output = await this.getPythonOutput();
    console.log(`python button has been pressed.`);
    console.log(python_output);

    this.setState({ isExecuted: true, output: python_output });
    this.props.setPred(python_output);
  }

  button_press() {
    this.execute_python().then(() => {
      this.props.redirect();
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" 
          //disabled={!this.props.path.endsWith('.csv')}

            onClick={this.button_press}>Analyze Patient</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        {this.props.path.endsWith('.csv') ? '' : "please upload a csv file"}
        </div>
      </div>
    )
  }
}


export default PythonButton;
