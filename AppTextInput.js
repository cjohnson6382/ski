import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard, TextInput } from 'react-native';
import styles from './Styles';

export default class AppTextInput extends React.Component {
	static propTypes = {
		update: PropTypes.func.isRequired,
		placeholder: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.oneOf(["textInput"]).isRequired
	};	

	render() {
		return (
			<TextInput 
				style={[styles.text, styles.transparentBackground]}
				placeholder={ this.props.placeholder } 
				placeholderTextColor="white"
				onChangeText={(text) => this.props.update(this.props.name, text) }
				onSubmitEditing={ (event) => Keyboard.dismiss() }
			/>
		);
	}
}