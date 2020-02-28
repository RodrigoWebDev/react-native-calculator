import React, { Component } from "react";
import { View, Text } from "react-native";
import Button from "./components/Button";
import Calc from "./components/Calc";
import Topview from "./components/Topview";
import Result from "./components/Result";
import styles from "./components/CSS";
import Title from "./components/Title";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "",
      result: ""
    };

    this.handleClick = val => {
      this.setState({
        expression: this.state.expression + val
      });
    };

    this.handleCalculate = e => {
      this.setState({
        result: eval(this.state.expression)
      });
    };

    this.handleClean = e => {
      this.setState({
        expression: "",
        result: ""
      });
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Title />

        <Topview
          expression={this.state.expression}
          currentOperator={this.state.currentOperator}
        />

        <Button handleClick={this.handleClick}>7</Button>
        <Button handleClick={this.handleClick}>8</Button>
        <Button handleClick={this.handleClick}>9</Button>
        <Button
          handleClick={this.handleClick}
          customCSS={styles.buttonOperation}
        >
          /
        </Button>
        <Button handleClick={this.handleClick}>4</Button>
        <Button handleClick={this.handleClick}>5</Button>
        <Button handleClick={this.handleClick}>6</Button>
        <Button
          handleClick={this.handleClick}
          customCSS={styles.buttonOperation}
        >
          *
        </Button>
        <Button handleClick={this.handleClick}>1</Button>
        <Button handleClick={this.handleClick}>2</Button>
        <Button handleClick={this.handleClick}>3</Button>
        <Button
          handleClick={this.handleClick}
          customCSS={styles.buttonOperation}
        >
          -
        </Button>
        <Button handleClick={this.handleClick}>0</Button>
        <Button handleClick={this.handleClick}>.</Button>

        <Calc
          handleClick={this.handleCalculate}
          customCSS={styles.buttonResult}
          textCSS={styles.textWhite}
        >
          =
        </Calc>

        <Button
          customCSS={styles.buttonOperation}
          handleClick={this.handleClick}
        >
          +
        </Button>
        <Result handleClean={this.handleClean} result={this.state.result} />
      </View>
    );
  }
}
