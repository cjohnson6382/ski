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
Current Status: 
	gets an inspection JSON from the server, 
	parses it into categories/questions; 
	presents each category and each question in that category -- all on the same view; not separated by category yet
	when the frontend fetches or posts data to the server, it provides a place to call loading spinners and similar

ToDo:
	form validation for the inspection
	build server route to get form and insert it into DB
	build test script that inserts many inspections into database for data analysis purposes
*/