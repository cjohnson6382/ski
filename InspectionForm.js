import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';

import AppPicker from './AppPicker';
import AppTextInput from './AppTextInput';
import styles from './Styles';

const componentMap = {
	picker: AppPicker,
	textInput: AppTextInput
};

export default class InspectionForm extends React.Component {
	static propTypes = {
		app: PropTypes.array
	};

	constructor (props) {
		super(props)

		// this.renderComponent = this.renderComponent.bind(this);
		this.setInspectionItem = this.setInspectionItem.bind(this);

		this.state = {
			items: [],
			inspection: {}
		};
	}

	setInspectionItem (k, v) {
		let specto = this.state.inspection;	
		specto[k] = v;
		this.setState({ inspection: specto });
	}

	renderComponent (component, index) {
		let ComponentType = componentMap[component.type];
		return <ComponentType key={ index } {...component} update={ this.setInspectionItem } />;
	}

	render () {
		let components = this.props.app.map((component, i) => { return this.renderComponent(component, i) })
		console.log("inspection form renders: ", components);
		return (
			<View>
				<Text style={[styles.text, styles.transparentBackground]} >Inspection: { JSON.stringify(this.state.inspection) }</Text>
				{ components.length > 0 && components }
			</View>
		)
	}
}