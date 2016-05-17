
import {
	LOGIN,
	CREATE_PROFILE,
	UPDATE_PROFILE,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_ERROR,
	DESTROY_PROFILE,
	RECOVER_PASSWORD,
	RECOVER_PASSWORD_CONFIRM,
	
} from "../actions/UserActions"

			
export default function UserReducer(state, action) {	
	
	switch (action.type) {	

		case LOGIN:
			return state;

		case CREATE_PROFILE:
			// return Object.assign({}, state, {
			// 	isEditing: action.payload.isEditing
			// }, ...state.isEditing)
			return state;

		case FETCH_PROFILE_SUCCESS:
			return state;

		case FETCH_PROFILE_ERROR:
			return state;

		case UPDATE_PROFILE:
			return state;

		case DESTROY_PROFILE:
			return state;		

		case RECOVER_PASSWORD:
			return state;

		case RECOVER_PASSWORD_CONFIRM:
			return state;
					
		default:
			return state;
	}
}