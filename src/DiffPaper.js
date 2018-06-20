import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Form from './Form';
import Doc from './Doc';


const styles = theme => ({
  root: {
    flexGrow: 11,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;
  //const report = ("Report Goes here")
  const changes = ("Changes in sentences go here")

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="headline" gutterBottom>
          </Typography>
        <Paper>
        </Paper>
    </Grid>
    <Grid item xs={6}>
          <Typography variant="headline" gutterBottom>
            Changes
          </Typography>
          <Paper className={classes.paper}>{changes}
          </Paper>
      </Grid>
      <Grid item xs={6}>
          <Typography variant="headline" gutterBottom>
              Report
            </Typography>
          <Paper className={classes.paper}>
            <Doc></Doc>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
