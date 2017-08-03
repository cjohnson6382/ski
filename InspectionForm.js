import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import styles from './Styles';
import Category from './Category';

const InspectionForm = ({ items }) => (<View>{ items.map((category, index) => <Category key={ index } category={ category } />)}</View>)

InspectionForm.propTypes = { items: PropTypes.array }

export default InspectionForm