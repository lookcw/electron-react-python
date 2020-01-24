// Libraries
import React from 'react';
import PythonButton from './python-button';
import UploadingButton from './upload-button';
import { Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system';

class UploadPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path: '',
      redirect: false,

    }
    this.uploadHandleChange = this.uploadHandleChange.bind(this)
    this.setRedirect = this.setRedirect.bind(this)
  }

  uploadHandleChange(input) {
    this.setState({ path: input.target.files[0].path });
    console.log(`upload button has been pressed. new file: ${this.state.path}`)
  }

  setRedirect() {
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to='/results' />)
    }
    else {
      return (
        <div className='app'>
          <h1 className='title'>Synapto Application</h1>
          <UploadingButton handleClick={this.uploadHandleChange} />
          <PythonButton setPred={this.props.setPred} redirect={this.setRedirect} path={this.state.path} />
        </div>
      )
    }
  }
}


export default UploadPage;
