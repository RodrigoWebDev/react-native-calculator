import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./CSS";

export default class Topview extends Component {
  render() {
    return (
      <View style={styles.topview}>
        <Text style={styles.topviewText}>{this.props.expression}</Text>
      </View>
    );
  }
}
