import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./CSS";

export default class Number extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.handlePress(this.props.children)}
      >
        <View style={[styles.button, this.props.customCSS]}>
          <Text style={this.props.textCSS}>{this.props.children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
