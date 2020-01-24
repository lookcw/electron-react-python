import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
        <Button variant="raised" component="span" className={classes.button}>
          Upload
        </Button>
    </div>
  );
}