import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./CSS";

export default class Title extends Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>React Native Calculator</Text>
      </View>
    );
  }
}
