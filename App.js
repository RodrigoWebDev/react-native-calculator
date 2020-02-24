import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Number from "./components/Number"
import Operator from "./components/Operator"
import Result from "./components/Result"
import Topview from "./components/Topview"
import styles from "./components/CSS"



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNumber: "",
      nextNumber: "",
      currentOperator: "",
      result: ""
    }


    this.handleClickNumber = val => {
      if(this.state.currentOperator === ""){
        this.setState({
          currentNumber: this.state.currentNumber + val
        })
      }else{
        this.setState({
          nextNumber: this.state.nextNumber + val
        })
      }
      
      console.log("Current number:", this.state.currentNumber)
      console.log("Next number:", this.state.nextNumber)
    }

    this.handleClickOperator = val => {
      this.setState({
        currentOperator: val
      })
    }

    this.handleClickCalculate = e => {
      console.log("Click");
      let val1 = parseFloat(this.state.currentNumber)
      let val2 = parseFloat(this.state.nextNumber)
      let operator = this.state.currentOperator

      switch(operator){
        case "+": this.setState({ result : val1 + val2})
        case "-": this.setState({ result : val1 - val2})
        case "x": this.setState({ result : val1 * val2})
        case "÷": this.setState({ result : val1 / val2})
      }

      console.log(`${val1} ${operator} ${val2} ${this.state.result}`)

      this.setState({
        currentNumber: "",
        nextNumber: "",
        currentOperator: ""
      })

      
    }
  }

  render() {

    return (
      <View style={styles.container}>
        
        <Topview
          currentNumber={this.state.currentNumber}
          currentOperator={this.state.currentOperator}
          nextNumber={this.state.nextNumber}
        />

        <Number handleClickNumber={this.handleClickNumber}>7</Number>
        <Number handleClickNumber={this.handleClickNumber}>8</Number>
        <Number handleClickNumber={this.handleClickNumber}>9</Number>
        <Operator
          handleClickOperator={this.handleClickOperator}
          customCSS={styles.buttonOperation}
        >
          ÷
        </Operator>
        <Number handleClickNumber={this.handleClickNumber}>4</Number>
        <Number handleClickNumber={this.handleClickNumber}>5</Number>
        <Number handleClickNumber={this.handleClickNumber}>6</Number>
        <Operator
          handleClickOperator={this.handleClickOperator}
          customCSS={styles.buttonOperation}
        >
          x
        </Operator>
        <Number handleClickNumber={this.handleClickNumber} >1</Number>
        <Number handleClickNumber={this.handleClickNumber}>2</Number>
        <Number handleClickNumber={this.handleClickNumber}>3</Number>
        <Operator
          handleClickOperator={this.handleClickOperator}
          customCSS={styles.buttonOperation}
        >
          -
        </Operator>
        <Number handleClickNumber={this.handleClickNumber}>0</Number>
        <Number handleClickNumber={this.handleClickNumber}>.</Number>

        <Result handleClick={this.handleClickCalculate} customCSS={styles.buttonResult} textCSS={styles.textWhite}>=</Result>

        <Operator
          customCSS={styles.buttonOperation}
          handleClickOperator={this.handleClickOperator}
        >
          +
        </Operator>
      </View>
    );

  }

}