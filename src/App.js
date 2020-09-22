import React,{Component} from 'react';
import './App.css';
import Button from './Components/Button.js';
import ClearButton from './Components/ClearButton';
import Input from './Components/Input.js';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       input: '',
       previousNumber: '',
       currentNumber: '',
       operator: ''
    }
  }
  

  addToinput = val => {
    this.setState({ input: this.state.input + val })
  }

  addZeroToinput = val => {
    //if this.state.input is not empty and then input zero
    if(this.state.input != '') {
      this.setState({ input: this.state.input + val })
    }
  }

  addDecimal = val => {
    //add decimal if no current decimal point isn't present in input area
    if(this.state.input.indexOf('.')=== -1){
      this.setState({ input: this.state.input + val })
    }
  }

  clearInput = () => {
    this.setState({ input: "" })
  }

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' })
    this.state.operator = 'plus'
  }

  substract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' })
    this.state.operator = 'substract'
  }

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' })
    this.state.operator = 'divide'
  }

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: '' })
    this.state.operator = 'multiply'
  }

  evaluate = () => {
    this.state.currentNumber = this.state.input
    if(this.state.operator == 'plus'){
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator == 'substract'){
      this.setState({
        input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator == 'divide'){
      this.setState({
        input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
      })
    }
    else if(this.state.operator == 'multiply'){
      this.setState({
        input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
      })
    }
  }

  render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
            <Input>{this.state.input}</Input>
        </div>
        <div className="row">
            <Button handleClick={this.addToinput}>7</Button>
            <Button handleClick={this.addToinput}>8</Button>
            <Button handleClick={this.addToinput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToinput}>4</Button>
            <Button handleClick={this.addToinput}>5</Button>
            <Button handleClick={this.addToinput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToinput}>1</Button>
            <Button handleClick={this.addToinput}>2</Button>
            <Button handleClick={this.addToinput}>3</Button>
            <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToinput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.substract}>-</Button>
        </div>
        <div className="row">
            <ClearButton handleClear={this.clearInput}></ClearButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
