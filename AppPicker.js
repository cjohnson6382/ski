import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';
import styles from './Styles';

export default class AppPicker extends React.Component {
	static propTypes = {
		update: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		default: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.oneOf(["picker"]).isRequired
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

	makeOptions () { 
		let options = this.props.options.map((item, index) => { return <Picker.Item key={ index } label={ item } value={ item } /> });
		return options;
	} 

	update (val, ind) {
		this.setState({ selected: val });
		this.props.update(this.props.name, val);
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