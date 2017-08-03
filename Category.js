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
	return <View>{ category.values.map((item, index) => {
		let ComponentType = componentMap[item.type]
		return <ComponentType key={ index } { ...item } category={ category.name } />
	}) }</View>
}

Category.propTypes = { category: PropTypes.object }

export default Category