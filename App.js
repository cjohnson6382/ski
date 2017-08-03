import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';

import { fetchInspection } from './action_creators'
import reducer from './reducer'
import ConnectedLandingPage from './LandingPage'

const loggerMiddleware = createLogger()

let store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
store.dispatch(fetchInspection())

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