// Reducer handles addTodo action
// March 22, 2017

import { ADD_TODO } from '../actions/index';

export default function (state = [], action) {

	console.log('action =', action);
	console.log('state before switch = ', state);

	switch (action.type) {
		case ADD_TODO:
			return [
				action.payload.data, ...state
			];
	}

	return state;
}