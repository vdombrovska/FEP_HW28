import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
      this.state ={
        firstNumber : 0,
        secondNumber: 0,
        operator: 0,
      }
  }
  render() {
    return (
      <div>
        <input name="firstNumber"
            value={this.state.firstNumber}
            onFirstInputChange={this.onFirstInputChange}
        />
        <select name="operator"
            value={this.state.operator}
            onOperatorchange={this.onOperatorchange}>
            <option value='+'>+</option>
            <option value='-'>-</option>
            <option value='/'>/</option>
            <option value='*'>*</option>
        </select>
        <input
            name="secondNumber"
            value={this.state.secondNumber}
            onSecondInputChange={this.onSecondInputChange}
        />
        
        <p id="result" onInputChange = {this.state.result.textContent= '='+'${result}'}></p>
      </div>
    );
  }
    onFirstInputChange = (e) => {
        this.setState({ 
          firstNumber: +e.target.value,
        });
    };


    onSecondInputChange = (e) => {
        this.setState({
            secondNumber: +e.target.value,
        });
    };

    onOperatorchange = (e) => {
      this.setState({
        operator: e.target.value,
      });
    };
  
    //validationOperands(e) {
     // return ( e.target.value !== '' && !isNaN )
   // }
  
    calculation(a,b,operator) {
      if (!NaN(a) && !NaN(b))
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b; 
      }
    }  
}
