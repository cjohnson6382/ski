import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import ConnectedAppPicker from './AppPicker';
import ConnectedAppTextInput from './AppTextInput';
import styles from './Styles';


const componentMap = {
	picker: ConnectedAppPicker,
	textInput: ConnectedAppTextInput
};

const Category = ({ category }) => {
	<View>{ category.values.map((item, index) => {
		let ComponentType = componentMap[item.type]
		return <ComponentType key={ index } { ...item } category={ category.name } />
	}) }</View>
}

Category.propTypes = { category: PropTypes.object.isRequred }

export default Category

/*
	I think I need to move this function that I'm trying to map down to the individual component level
*/
// const mapDispatchToProps = (dispatch) => {
// 	return { onChange: (e) => dispatch() }
// }