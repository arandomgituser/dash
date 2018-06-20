import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Form from "./Form"
import DiffPaper from "./DiffPaper"
import Companies from "./Companies"

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 100,
  },
});

class TabNames extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const {theme } = this.props;

    return (
      <div className>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
          <Tab label="Comparison Analysis" />
          <Tab label="Sentiment Analysis" />
          <Tab label="Tone Anslysis" />
          </Tabs>
        </AppBar>
        <SwipeableViews

          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
        <TabContainer >
          <Form></Form>
          <DiffPaper></DiffPaper>
        </TabContainer>
        <TabContainer >
          <DiffPaper></DiffPaper>
        </TabContainer>
        <TabContainer >
            <DiffPaper></DiffPaper>
          
        </TabContainer>

        </SwipeableViews>
      </div>
    );
  }
}

TabNames.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default TabNames
