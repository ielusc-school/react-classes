import React, { Component } from 'react';
import './Calculator.css';
// como iremos usar estados vamos ter que usar class....
import Button from '../components/button/Button';
import Display from '../components/display/Display';

export default class Calculator extends Component {
  render () {
    return (
      <div className="calculator">
        <Display value="9990"/>
        <Button label="AC"/>
        <Button label="/"/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="X"/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-"/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>
        <Button label="."/>
        <Button label="="/>
      </div>
    )
  }
}