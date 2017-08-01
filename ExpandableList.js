/*
	An inspection comes as a list of categories
		categories are groups of questions

	This component holds categories
		it takes a full inspection and breaks it down into categories
		it gives each category a piece of the inspection JSON as a prop

*/


import React from 'react';
import PropTypes from 'prop-types';
// import { Picker } from 'react-native';
import styles from './Styles';

export default class ExpandableList extends React.Component {
	static propTypes = {
		inspection: PropTypes.object.isRequred,
		update: PropTypes.func.isRequired
	};	

	constructor (props) { 
		super(props);

		this.makeOptions = this.makeOptions.bind(this);
		this.update = this.update.bind(this);

		this.state = { 
			items: [], 
			selected: this.props.default 
		};
	}

	render() {
		let options = this.makeOptions();
		return (
			<Picker 
				style={styles.transparentBackground} 
				itemStyle={styles.text}
				selectedValue={ this.state.selected } 
				onValueChange={ this.update } 
			>
				{ options.length > 0 && options }
			</Picker>
		)
	}
}