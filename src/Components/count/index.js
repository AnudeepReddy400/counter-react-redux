import {Component} from 'react'
import './index.css'
import {connect} from 'react-redux'

class Count extends Component {
  
    increment = () =>{
        this.props.dispatch({
            type:"INCREMENT"
        })
    }

    decrement = () =>{
        this.props.dispatch({
            type:"DECREMENT"
        })
    }

  render(){
  return (
    <div className = "main-container">
    <div className = "count-container">
      <button type = "button" className = "increment" onClick = {this.increment}>
        <p className = "plus">+</p>
      </button>
      <h1 className = "number">{this.props.count}</h1>
      <button type = "button" className = "decrement" onClick = {this.decrement}>
        <p className = "minus">-</p>
      </button>
    </div>
    </div>
  );
  }
}

const mapStateToProps = state =>({
    count: state.count
})

export default connect(mapStateToProps)(Count);
