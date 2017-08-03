import fetch from 'isomorphic-fetch';

//	ACTIONS
export const SET_FORM_STATE = "SET_FORM_STATE"
export const LOADED = "LOADED"
export const USER = "USER"
export const REQUEST_INSPECTION = "REQUEST_INSPECTION"
export const RECEIVE_INSPECTION = "RECEIVE_INSPECTION"
export const CREATE_FORM = "CREATE_FORM"
export const FORM_POSTED = "FORM_POSTED"
export const FORM_SAVED = "FORM_SAVED"

//	ACTION CREATORS
export function setFormState (category, name, newState) { return { type: SET_FORM_STATE, category, name, newState } }
export function loaded () { return { type: LOADED } }
export function user (action) { return { type: USER, action } }
export function createForm () { return { type: CREATE_FORM } }

//	THUNKS
function getInspection () { return { type: REQUEST_INSPECTION } }
function gotInspection (inspection) { return { type: RECEIVE_INSPECTION, inspection } }

export function fetchInspection () {
	return async (dispatch) => {
		dispatch(getInspection())
		res = await fetch(
			"https://sunkaizen-server.herokuapp.com/inspection-json",
			{ method: "GET", headers: { "accept": "application-json" } }
		)
		json_res = await res.json()
		dispatch(gotInspection(json_res))
	}
}

function formPosted () { return { type: FORM_POSTED } }
function formSaved (statusMessage) { return { type: FORM_SAVED, statusMessage} }

export function sendForm (form) { 
	return async (dispatch) => {
		dispatch(formPosted())
		res = await fetch(
			"https://sunkaizen-server.herokuapp.com/form",
			{ method: "POST", body: JSON.stringify(form), mode: "cors", headers: { "accept": "application-json", "content-type": "application-json" } }
		)
		json_res = await res.json()

		dispatch(formSaved(json_res))
		dispatch(createForm())
	}
}