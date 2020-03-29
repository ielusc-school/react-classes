import React, { Component } from 'react';
import './Calculator.css';
// como iremos usar estados vamos ter que usar class....
import Button from '../components/button/Button';
import Display from '../components/display/Display';

// create object to initiaul value and state
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {
  // state começa a receber todo o meu objeto initialState
  state = {...initialState}; //  spread operator...

  constructor(props) {
    super(props) 

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    // passo agora meu estado inicial da calculadora para os valores default
    // invoco o metodo this.setState do React
    // debugger;
    this.setState({ ...initialState })
    console.log('reset');
  }

  setOperation(operation) {
    if(this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;
      const values = [... this.state.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      } catch(error) {
        values[0] = this.state.values[0];
      }

      values[1] = 0; 

      this.setState({
        displayValue: values[0],
        clearDisplay: !equals,
        operation: equals ? null : operation,
        values,
        current: equals ? 0 : 1
    });
    console.log(operation);
  }
}

  addDigit(n) {
    // evitando que seja adicionado consecutivamente 1.. 
    if(n === '.' && this.state.displayValue.includes('.')) {
      return;
    }
    const clearDisplay = this.state.displayValue === '0' 
      || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });
    console.log(n);

    if(n !== '.') {
      const i = this.state.current;
      console.log('i', i);
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({values});
      console.log(values);
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue}/>
        <Button label="AC" click={this.clearMemory} triple/>
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit}/>
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}