import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => (dispatch) => {
	dispatch(setItemsLoading());
	axios.get('/api/items').then((res) =>
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		})
	);
};

export const addItem = (item) => (dispatch) => {
	//add it to mongoDB, items.js ADD
	axios.post('/api/items', item).then((res) =>
		dispatch({
			type: ADD_ITEM,
			payload: res.data
		})
	);

	/*return {
		type: ADD_ITEM,
		payload: item
	};*/
};

//items.js DELETE api/items/:id
export const deleteItem = (id) => (dispatch) => {
	//delete request
	axios.delete(`/api/items/${id}`).then((res) =>
		dispatch({
			type: DELETE_ITEM,
			payload: id
		})
	);
	/*return {
		type: DELETE_ITEM,
		payload: id
	};*/
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};
