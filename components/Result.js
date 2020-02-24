import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from "./CSS"

export default class Result extends Component {
    render() {
        return (
            <View
                style={[styles.button, this.props.customCSS]}
                onClick={this.props.handleClick}
            >
                <Text style={this.props.textCSS}>{this.props.children}</Text>
            </View>
        );
    }
}


