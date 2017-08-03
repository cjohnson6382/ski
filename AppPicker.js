import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 
import { Picker } from 'react-native'

import styles from './Styles'
import { setFormState } from './action_creators'


const mapStateToProps = state => { 
	return { form: state.inspection.form } 
}
const mapDispatchToProps = (dispatch, ownProps) => { return { onSubmit: (e) => { dispatch(setFormState(ownProps.category, ownProps.name, e)) } } }

const AppPicker = ({ form, onSubmit, category, options, selected, name, type }) => {
	return (
		<Picker 
			style={styles.transparentBackground} 
			itemStyle={styles.text} 
			selectedValue={ form.categories[category] ? form.categories[category][name] : selected } 
			onValueChange={ onSubmit } 
		>
			{ options.map((option, index) => { return <Picker.Item key={ index } label={ option } value={ option } /> }) }
		</Picker>
	)
}

AppPicker.propTypes = {
	form: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selected: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["picker"]).isRequired
};	

const ConnectedAppPicker = connect(mapStateToProps, mapDispatchToProps)(AppPicker)
export default ConnectedAppPicker

/*
export default class AppPicker extends React.Component {

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

*/