import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './Styles';

export default class Error extends React.Component {
	render() {
		return (
			<View>
				<Text style={[styles.text, styles.transparentBackground]} >Something Broke Loading the Inspection Form...</Text>
				<Image style={[styles.smallImage, styles.transparentBackground]} source={ { uri: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Pushing_Up_The_Daisies_-_geograph.org.uk_-_428701.jpg" } } />
			</View>
		)
	}
}