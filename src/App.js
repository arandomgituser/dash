import React from 'react'
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Companies from './Companies'
import Analysis from './Analysis'
import Overview from './Overview'



class App extends React.Component {

  
  render() {
    return (
      <Router>
        <div className="App">
          <Header children={<h1>hello world</h1>}>               
          <Route path="/" exact render={
            ()=> {
              return (<h1>Welcome homeo</h1>);  
            }
          }/>
          <Route path="/overview" exact render={
            ()=> {
              return (<Overview/>);
            }
          }/>
          <Route path="/companies" exact render={
            ()=> {
              return (<Companies/>);
            }
          }/>
          <Route path="/analysis" exact render={
            ()=> {
              return (<Analysis/>);
            }
          }/>
          </Header>               
        </div>
      </Router>
    );
  }
}

export default App;
