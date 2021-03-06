import { combineReducers } from 'redux';

// Step 1: import reducer functions
import AddTodoReducer from './reducer_addTodo';
import ListTodosReducer from './reducer_listTodos';

// Step 2: list reducers in combineReducers object
const rootReducer = combineReducers({
	addTodos: AddTodoReducer,
	listTodos: ListTodosReducer
});

export default rootReducer;

/*
const rootReducer = combineReducers({
  state: (state = {}) => state
});
*/

/*
As your app grows more complex, you'll want to split your 
reducing function into separate functions, each managing 
independent parts of the state.

combineReducers() turns an object whose values are different
reducing functions into a single reducing function that
can be passed to createStore.

The shape of the state object matches the keys of the passed
reducers.

	An example state object:

		{
		  reducer1: ...
		  reducer2: ...
		}

*/






