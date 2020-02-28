import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./CSS";

export default class Clean extends Component {
  render() {
    return (
      <View onClick={this.props.handleClean} style={styles.clean}>
        <Text style={styles.cleanText}>Clean</Text>
      </View>
    );
  }
}
