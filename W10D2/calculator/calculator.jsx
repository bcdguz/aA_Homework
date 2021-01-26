import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(event) {
    event.preventDefault();
    let val = document.getElementById("input1").value;
    this.setState({ num1: val});

  }

  setNum2(event) {
    event.preventDefault();
    let val = document.getElementById("input2").value;
    this.setState({ num2: val });
  }

  add(event) {
    event.preventDefault();
    let sum = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    this.setState({ result: sum });
  }

  subtract(event) {
    event.preventDefault();
    let sum = parseFloat(this.state.num1) - parseFloat(this.state.num2);
    this.setState({ result: sum });
  }

  multiply(event) {
    event.preventDefault();
    let sum = parseFloat(this.state.num1) * parseFloat(this.state.num2);
    this.setState({ result: sum });
  }

  divide(event) {
    event.preventDefault();
    let sum = parseFloat(this.state.num1) / parseFloat(this.state.num2);
    this.setState({ result: sum });
  }

  clear(event) {
    event.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input id="input1" type="text" onChange={this.setNum1} value={this.state.num1}/>
        <input id="input2" type="text" onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.clear}>Clear</button>
        <br/>
        <button onClick={this.add}>+</button>    
        <button onClick={this.subtract}>-</button>  
        <button onClick={this.multiply}>*</button>  
        <button onClick={this.divide}>/</button>  
      </div>
    );
  }
}

export default Calculator;
