import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./CSS";

export default class Clean extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.handleClean}>
        <View style={styles.clean}>
          <Text style={styles.cleanText}>Clean</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
