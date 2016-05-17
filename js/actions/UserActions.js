import dispatcher from "../dispatcher";
import axios from "axios"


export const LOGIN = "LOGIN";
export const CREATE_PROFILE = "CREATE_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const DESTROY_PROFILE = "DESTROY_PROFILE";
export const RECOVER_PASSWORD = "RECOVER_PASSWORD";
export const RECOVER_PASSWORD_CONFIRM = "RECOVER_PASSWORD_CONFIRM";
export const FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";


export function login(user) {
	return {
		type: LOGIN,
		payload: {
			// pass user data to reducer
		}
	}
		
}

export function createProfile(user) {
	return {
		type: CREATE_PROFILE,
		payload: {
			// pass user data to reducer
		}
	}
		
}

export function updateProfile(user) {
	return {
		type: UPDATE_PROFILE,
		payload: {
			// pass user data to reducer
		}
	}
		
}

export function destroyProfile(user) {
	return {
		type: DESTROY_PROFILE,
		payload: {
			// pass user data to reducer
		}
	}
		
}

export function recoverPassword(user) {
	return {
		type: RECOVER_PASSWORD,
		payload: {
			// pass user data to reducer
		}
	}
		
}

export function recoverPasswordSuccess(user) {
	return {
		type: RECOVER_PASSWORD_SUCCESS,
		payload: {
			// pass user data to reducer
		}
	}
		
}


export function fetchProfileSuccess() {
	return {
		type: FETCH_PROFILE_SUCCESS,
		payload: {
			// pass user data to reducer
		}
	}
}

export function fetchProfileError() {
	return {
		type: FETCH_PROFILE_ERROR,	
		payload: {
			//user error details
		}	
	}	
}

export function fetchProfile(user) {
	return dispatch => {

		axios.get('http://localhost:3000/')
		  .then(function (response) {		    		  	
		    dispatch(fetchProfileSuccess(response.data));
		  })
		  .catch(function (response) {		    
		    dispatch(fetchTableDataError());
		  });
		
	    // setTimeout(() => {	      
	      // dispatch(fetchCacheTableData());
	    // }, 1500);
	};
}





