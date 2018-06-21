import React from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form'
import Doc from './Doc'
import TabNames from './TabNames';

class Analysis extends React.Component{
  state = {
      data: undefined,
      error: undefined
    }

    getReport = async (e) => {
    e.preventDefault();

    const report = e.target.elements.report.value;
    const year = e.target.elements.year.value;
    const ticker = e.target.elements.ticker.value;
    const section = e.target.elements.section.value;

    const api_call = await fetch(`http://localhost:5000/data/report?report=${report}&year=${year}&ticker=${ticker}&section=${section}`)
    const data = await api_call.json()

    if (report && ticker && year && section){
      console.log(data);
      this.setState({
        data: data.data,
        error: ""
        });
      } else {
        this.setState({
          data: undefined,
          error: "Please enter the values"
        });
      }
    }

  render(){
    return(

    <Grid container>
      <Grid item sm>
        <Paper>
          <TabNames></TabNames>

          <Form getReport={this.getReport}/>
          <Doc
            data = {this.state.data}
            error = {this.state.error}
          />
        </Paper>
      </Grid>
    </Grid>

    )
  }
}

export default Analysis
