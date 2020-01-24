// Libraries
import React from 'react';
import UploadButton from 'react-upload-button-v2';
import Button from 'react-bootstrap/Button';
{/* <Button onChange={props.handleClick} >
Upload Patient EEG File
</Button> */}

function UploadingButton(props) {
    return (
	      <form method="post" className='form-group files color' style={{
          display: "flex",
          justifyContent: "center",
        }}>
              <div>
                <label style={{
          display: "flex",
          justifyContent: "center",
        }} >Upload patient EEG File</label>
                <input type="file" onChange={props.handleClick}  ></input>
              </div>
          </form>    )
}

export default UploadingButton;
