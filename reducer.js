import { combineReducers } from 'redux'
import { 
	CREATE_FORM, 
	LOADED, 
	RECEIVE_INSPECTION, 
	REQUEST_INSPECTION, 
	SET_FORM_STATE, 
	USER,
	FORM_POSTED,
	FORM_SAVED, 
	createForm 
} from './action_creators';



function category(state = {}, action) {
	switch (action.type) {
		case SET_FORM_STATE: return (state, action) => { return Object.assign({}, state, { [action.name]: action.newState })}
		default: return state
	}
}

function form(state = {}, action) {
	switch (action.type) {
		case SET_FORM_STATE: return (state, action) => { return Object.assign({}, state, { [action.category]: category(state[action.category], action) }) }
		default: return state;
	}
}


	// return Object.assign({}, state, { form: { [action.category]: [action.name]: action.newState } })
	// case SET_FORM_STATE: return (state, action) => { 
	// 	if (!state.form) { dispatch(createForm) }
	// 	return state.setIn(["form", ...action.path], action.newState) 
	// }
function inspection(state = { isFetching: true, failFetch: false, items: {}, formStatus: "", form: {} }, action) {
	switch (action.type) {
		case SET_FORM_STATE: return (state, action) => { return Object.assign({}, state, { form: form(state.form, action) })}
		case RECEIVE_INSPECTION: return (state, action) => { return Object.assign({}, state, { items: action.inspection, isFetching: false }) }
		case REQUEST_INSPECTION: return (state) => { return Object.assign({}, state, { isFetching: true }) }
		case LOADED: return (state) => { return Object.assign({}, state, { isFetching: false }) }
		case CREATE_FORM: return (state) => { return Object.assign({}, state, { form: state.items.keys() } ) }
		case FORM_POSTED: return (state) => { return Object.assign({}, state, { formStatus: "Saving Form to Server" } )}
		case FORM_SAVED: return (state, action) => { return Object.assign({}, state, { "formStatus": action.statusMessage })}
		default: return state;
	}
	
}

function user(state = { user: {} }, action) {
	switch(action.type) {
		case USER: return (state, action) => { 
			console.log("this function does nothing right now, returning state: ", state);
			return state
		}
		default: return state;
	}
}

const reducer = combineReducers({
	inspection,
	form,
	category,
	user
})

export default reducer