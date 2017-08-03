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

// function category(state = {}, action) {
// 	switch (action.type) {
// 		case SET_FORM_STATE: return Object.assign({}, state, { [action.name]: action.newState })
// 		default: return state
// 	}
// }

function form(state = {}, action) {
	switch (action.type) {
		case SET_FORM_STATE: return Object.assign({}, state, { [action.category]: { [action.name]: action.newState } })
		default: return state;
	}
}

function inspection(state = { isFetching: false, failFetch: false, items: [], formStatus: "", form: { categories: [] } }, action) {
	switch (action.type) {
		case SET_FORM_STATE: return Object.assign({}, state, { form: { categories: form(state.form.categories, action) } })
		case RECEIVE_INSPECTION: return Object.assign({}, state, { items: action.inspection, isFetching: false })
		case REQUEST_INSPECTION: return Object.assign({}, state, { isFetching: true }) 
		case LOADED: return Object.assign({}, state, { isFetching: false })
		case CREATE_FORM: return Object.assign({}, state, { form: { categories: state.items.keys() } })
		case FORM_POSTED: return Object.assign({}, state, { formStatus: "Saving Form to Server" })
		case FORM_SAVED: return Object.assign({}, state, { formStatus: action.statusMessage })
		default: return state;
	}
}

function user(state = { user: {} }, action) {
	switch(action.type) {
		case USER: return state
		default: return state;
	}
}

const reducer = combineReducers({
	inspection,
	// form,
	// category,
	user
})

export default reducer