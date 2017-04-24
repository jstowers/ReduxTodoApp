let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const LIST_TODOS = 'LIST_TODOS';

// The action creator addTodo returns an action.
// An action is an object with type and payload properties.
export function addTodo(text) {

	return {
		type: 'ADD_TODO',
		payload: {
			id: nextTodoId++,
			text: text
		}
	};
}

export function listTodos(todos) {
	
	return {
		type: 'LIST_TODOS',
		payload: todos
	};
}