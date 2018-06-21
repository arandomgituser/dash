import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';

  const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class Overview extends React.Component{


  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
          <h1>#teamWinning</h1>
          <h2>Overview Page</h2>
        </Paper>
    )
  }
}

export default withStyles(styles)(Overview); 
