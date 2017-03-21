let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';

// The action creator addTodo returns an action.
// An action is an object with type and payload properties.
export function addTodo(text) {

	return {
		type: 'ADD_TODO',
		payload: {
			id: nextTodoId++,
			text: text
	};
}