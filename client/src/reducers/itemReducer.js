//reducer is where our actual state is gonna go
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
	items: [
		/*		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Milk' },
		{ id: uuid(), name: 'Steak' },
		{ id: uuid(), name: 'Cand' }*/
	],
	loading: false
};

//action is an obj with a type
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state, //return whatever is in items
				items: action.payload,
				loading: false
			};
		case DELETE_ITEM:
			return {
				...state,
				//it's _id because of MongoDB
				items: state.items.filter((item) => item._id !== action.payload)
			};
		case ADD_ITEM:
			return {
				...state,
				items: [ action.payload, ...state.items ]
			};
		case ITEMS_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
