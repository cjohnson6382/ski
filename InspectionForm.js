import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import styles from './Styles';

const InspectionForm = ({ inspection }) => (<View>{ inspection.map(category => <Category category={ category } />)}</View>)

InspectionForm.propTypes = { inspection: PropTypes.array.isRequred }

export default InspectionForm