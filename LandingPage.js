import React from 'react';
import PropTypes from 'prop-types';
import { Image, Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Loading from './Loading';
import InspectionForm from './InspectionForm';
import Err from './Err';

import styles from './Styles';

import { connect } from 'react-redux'; 
import { submitInspection } from './action_creators';


const mapStateToProps = state => { return { inspection: state.inspection, form: state.form } }
const mapDispatchToProps = (dispatch, ownProps) => { return onSubmit: () => { sendForm(ownProps.form) } }

const LandingPage = ({ inspection, form, onSubmit }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<Image style={styles.backgroundImage} source={ {uri: "http://i.imgur.com/xNmuUcf.jpg?1" } }>
			<ScrollView 
				keyboardDismissMode="on-drag"
				style={styles.container}
			>
				{ inspection.items.length > 0 && (<InspectionForm app={ inspection.items } />) }
				{ inspection.isFetching && (<Loading />) }
				{ !inspection.isFetching && inspection.items.length < 1 && (<Err />)}
			</ScrollView>
			<TouchableOpacity 
				style={styles.buttonContainer}
				accessabilityLabel="submit this inspection to the server" 
				onPress={ (event) => { onSubmit }) } }
			>
				<Text style={[styles.button, styles.text]} >Submit Inspection</Text>
			</TouchableOpacity>
		</Image>
	</TouchableWithoutFeedback>
);

LandingPage.propTypes = { inspection: PropTypes.object.isRequired }

export default const ConnectedLandingPage = connect(mapStateToProps)(LandingPage)