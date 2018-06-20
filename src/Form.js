import React from 'react'

class Form extends React.Component{
  render(){
    return (
      <form align = "center" onSubmit = {this.props.getReport}>
        <input type="text" name="report" placeholder="Report*"/>
        <input type="text" name="year" placeholder="Year*"/>
        <input type="text" name="ticker" placeholder="Ticker*"/>
        <input type="text" name="section" placeholder="Section"/>
      <div>
        <button align = "center"> Get Report </button>
     </div>
      </form>
    )
  }
}

export default Form
