import React from 'react'
import Form from './Form'
import Doc from './Doc'
import Header from './Header';
import TabNames from './TabNames';



class App extends React.Component {

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


  render() {
    return (
      <div>

        <Header></Header>
        <TabNames></TabNames>
        <Form getReport={this.getReport}/>
        <Doc
          data = {this.state.data}
          error = {this.state.error}
        />


    </div>

    );
  }
}

export default App;
