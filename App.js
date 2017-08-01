import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk';

import { fetchInspection } from './action_creators';
import reducer from './reducers'
import ConnectedLandingPage from './LandingPage'

let store = createStore(reducer, {}, applyMiddleware(thunkMiddleware))
store.dispatch(fetchInspection)

export default class App extends React.Component {
	render () {
		return (
			<Provider store={ store }>
				<ConnectedLandingPage />
			</Provider>
		)
	}
}

/*
ToDo:
	form validation for the inspection
	move the inspection state here and pass it to the InspectionForm so that I can submit from the top level
	submit form to server
	build server route to get form and insert it into DB
	build test script that inserts many inspections into database for data analysis purposes
*/


/*
import React from 'react';
import { Image, Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Loading from './Loading';
import InspectionForm from './InspectionForm';
import styles from './Styles';

export default class App extends React.Component {
	constructor (props) {
		super(props)

		this.getInspection = this.getInspection.bind(this);

		this.state = { inspection: [], button: "" };
	}

	componentDidMount () {
		this.getInspection();
	}

	async getInspection () {
		res = await fetch(
			"https://sunkaizen-server.herokuapp.com/inspection-json",
			{ method: "GET", headers: { "accept": "application-json" } }
		);
		res_json = await res.json();
		this.setState({ inspection: res_json });
	}
*/

	/*
	ToDo:
		form validation for the inspection
		move the inspection state here and pass it to the InspectionForm so that I can submit from the top level
		submit form to server
		build server route to get form and insert it into DB
		build test script that inserts many inspections into database for data analysis purposes
	*/

/*
	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Image style={styles.backgroundImage} source={ {uri: "http://i.imgur.com/xNmuUcf.jpg?1" } }>
					<ScrollView 
						keyboardDismissMode="on-drag"
						style={styles.container}
					>
						{ this.state.inspection.length > 0 && (<InspectionForm app={ this.state.inspection } />) }
						{ this.state.inspection.length == 0 && (<Loading />) }
					</ScrollView>
					<TouchableOpacity 
						style={styles.buttonContainer}
						accessabilityLabel="submit this inspection to the server" 
						onPress={ (event) => { this.setState({ button: "inspection is submitted" }) } }
					>
						<Text style={[styles.button, styles.text]} >Submit Inspection</Text>
					</TouchableOpacity>
				</Image>
			</TouchableWithoutFeedback>
		);
	}
}
*/