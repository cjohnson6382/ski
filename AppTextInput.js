import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { TextInput, Keyboard } from 'react-native';

import { setFormState } from './action_creators';
import styles from './Styles';

//	MAKE SURE THAT SETFORMSTATE IS UPDATED TO MATCH THE NEW SIGNATURE, CHANGE THIS TO LOOK LIKE THE APPPICKER COMPONENT
const mapDispatchToProps = (dispatch, ownProps) => { return { onSubmit: (e) => dispatch(setFormState(ownProps.category, ownProps.name, e)) } }

const AppTextInput = ({ onSubmit, category, placeholder, name, type }) => {
	return (<TextInput 
		style={[styles.transparentBackground, styles.text]} 
		placeholder={ placeholder } 
		placeholderTextColor={ "grey" } 
		onChangeText={ onSubmit } 
		onSubmitEditing={ Keyboard.dismiss } 
	/>)
}

AppTextInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["textInput"]).isRequired
};

const ConnectedAppTextInput = connect(null, mapDispatchToProps)(AppTextInput)
export default ConnectedAppTextInput

/*
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

*/