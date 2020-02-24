import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from "./CSS"

export default class Number extends Component {
    render() {
        return (
            <View
                style={[styles.button, this.props.customCSS]}
                onClick={() => this.props.handleClickNumber(this.props.children)}
            >
                <Text style={this.props.textCSS}>{this.props.children}</Text>
            </View>
        );
    }
}


