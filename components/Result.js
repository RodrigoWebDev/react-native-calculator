import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./CSS";
import Clean from "./Clean";

export default class Result extends Component {
  render() {
    return (
      <View style={styles.topview}>
        <Text style={styles.topviewText}>{this.props.result}</Text>
        <Clean handleClean={this.props.handleClean} />
      </View>
    );
  }
}
