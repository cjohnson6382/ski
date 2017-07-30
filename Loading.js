import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './Styles';

export default class AppPicker extends React.Component {
	// constructor (props) { super(props) }

	render() {
		return (
			<View>
				<Text style={[styles.text, styles.transparentBackground]} >Loading the Inspection Form...</Text>
				<ActivityIndicator style={ styles.transparentBackground } size="large" />
			</View>
		)
	}
}