import React, { Component } from 'react';
import './Calculator.css';
// como iremos usar estados vamos ter que usar class....
import Button from '../components/button/Button';
import Display from '../components/display/Display';

export default class Calculator extends Component {
  clearMemory() {
    console.log('limpar')
  }

  setOperation(operator) {
    console.log('operacao', operator);
  }

  addDigit(n) {
    console.log('digito', n)
  }

  render () {
    const addDigit = digito => this.addDigit(digito);
    const setOperation = calculate => this.setOperation(calculate);
   // const clearMemory = zero => this.clearMemory(zero);

    return (
      <div className="calculator">
        <Display value="9990"/>
        <Button label="AC" click={() => this.clearMemory()} triple/>
        <Button label="/" click={setOperation} operation/>
        <Button label="7" click={addDigit}/>
        <Button label="8" click={addDigit}/>
        <Button label="9" click={addDigit}/>
        <Button label="x" click={setOperation} operation/>
        <Button label="4" click={addDigit}/>
        <Button label="5" click={addDigit}/>
        <Button label="6" click={addDigit}/>
        <Button label="-" click={setOperation} operation/>
        <Button label="1" click={addDigit}/>
        <Button label="2" click={addDigit}/>
        <Button label="3" click={addDigit}/>
        <Button label="+" click={setOperation} operation/>
        <Button label="0" click={addDigit} double/>
        <Button label="." click={setOperation} operation/>
        <Button label="=" click={setOperation} operation/>
      </div>
    )
  }
}