import React from 'react';
import PropTypes from 'prop-types';
import { Image, Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Loading from './Loading';
import InspectionForm from './InspectionForm';
import Err from './Err';

import styles from './Styles';

import { connect } from 'react-redux'; 
import { sendForm } from './action_creators';


const mapStateToProps = state => { return { inspection: state.inspection, form: state.inspection.form.categories } }
const mapDispatchToProps = (dispatch, ownProps) => { return { onSubmit: e => dispatch(sendForm(ownProps.form)) } }

const LandingPage = ({ inspection, form, onSubmit }) => (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<Image style={styles.backgroundImage} source={ {uri: "http://i.imgur.com/xNmuUcf.jpg?1" } }>
			<ScrollView 
				keyboardDismissMode="on-drag"
				style={styles.container}
			>
				{ !inspection.isFetching && inspection.items.length && (<InspectionForm items={ inspection.items } />) }
				{ !inspection.isFetching && !inspection.items.length && (<Err />)}
				{ inspection.isFetching && (<Loading />) }
			</ScrollView>
			<TouchableOpacity 
				style={styles.buttonContainer}
				accessabilityLabel="submit this inspection to the server" 
				onPress={ onSubmit }
			>
				<Text style={[styles.button, styles.text]} >Submit Inspection</Text>
			</TouchableOpacity>
		</Image>
	</TouchableWithoutFeedback>
);

// LandingPage.propTypes = { inspection: PropTypes.function.isRequired }

export default ConnectedLandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPage)