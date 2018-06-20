import React from 'react'

class Doc extends React.Component{
  render(){
    return (
      <div>

        {this.props.report && this.props.year &&
          this.props.ticker && this.props.section}
          <p> Reports: {this.props.data} </p>

         <p> {this.props.error } </p>
      </div>
    )
  }
}

export default Doc
