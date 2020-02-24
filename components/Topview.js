import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from "./CSS"

export default class Topview extends Component {
    render() {
        return (
            <View style={styles.topview}>
                <Text>
                    {this.props.currentNumber}
                    {this.props.currentOperator}
                    {this.props.nextNumber}
                    {this.props.result}
                </Text>
            </View>
        );
    }
}


