// Libraries
import React from 'react';
// import {execute_python} from '../js/linker';
// Components
// const App = () => (
//   <div className="header">
//     <h1>Hello, World</h1>
//   </div>
// );





class App extends React.Component {
 execute_python() {
    var path = require("path")
  
    const city = 'XYZ';
    var options = {
      scriptPath : path.join(__dirname, '../../python/'),
      args : [city]
    }
  
    const {PythonShell} = require("python-shell");
  
    var shell = new PythonShell('main.py', options); //executes python script on python3
  
    shell.on('message', function(message) {
      console.log("what the fuck is up youtube")
      swal(message); //message is STD output of python script
    })
  }


  render (){
    return (
      <div className="header">
           <h1>Hello, World</h1>
          <button onClick={this.execute_python}>what why</button>
      </div>
    )
  }
}


export default App;
