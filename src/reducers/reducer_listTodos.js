// April 22, 2017
// Create a function that returns an array of simple todos

import { LIST_TODOS } from '../actions/index';

export default function (state=[], action) {

	let dummyTodos = [
		{
			id: 1,
			text: 'Pack suitcase',
			date: 'April 23',
			time: '1:00 pm'
		},
		{
			id: 2,
			text: 'Complete Yapstone coding challenge',
			date: 'April 23',
			time: '2:00 pm'
		},
		{
			id: 3,
			text: 'Buy biscochitos',
			date: 'April 24',
			time: '10:00 am'
		},
		{
			id: 4,
			text: 'Lunch with Trevor',
			date: 'April 24',
			time: '12:00 pm'
		},
		{
			id: 5,
			text: 'Meeting with Sara Traub',
			date: 'April 25',
			time: '2:00 pm'
		}
	];

	switch (action.type) {
		case LIST_TODOS:
			return [
				dummyTodos, ...state
			];
	}

	return state;

}