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

    this.handlePress = val => {
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

        <Button handlePress={this.handlePress}>7</Button>
        <Button handlePress={this.handlePress}>8</Button>
        <Button handlePress={this.handlePress}>9</Button>
        <Button
          handlePress={this.handlePress}
          customCSS={styles.buttonOperation}
        >
          /
        </Button>
        <Button handlePress={this.handlePress}>4</Button>
        <Button handlePress={this.handlePress}>5</Button>
        <Button handlePress={this.handlePress}>6</Button>
        <Button
          handlePress={this.handlePress}
          customCSS={styles.buttonOperation}
        >
          *
        </Button>
        <Button handlePress={this.handlePress}>1</Button>
        <Button handlePress={this.handlePress}>2</Button>
        <Button handlePress={this.handlePress}>3</Button>
        <Button
          handlePress={this.handlePress}
          customCSS={styles.buttonOperation}
        >
          -
        </Button>
        <Button handlePress={this.handlePress}>0</Button>
        <Button handlePress={this.handlePress}>.</Button>

        <Calc
          handlePress={this.handleCalculate}
          customCSS={styles.buttonResult}
          textCSS={styles.textWhite}
        >
          =
        </Calc>

        <Button
          customCSS={styles.buttonOperation}
          handlePress={this.handlePress}
        >
          +
        </Button>
        <Result handleClean={this.handleClean} result={this.state.result} />
      </View>
    );
  }
}
