import { combineReducers } from 'redux';
import TodoReducer from './reducer_addTodo';

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

// Step 1: import reducer functions

// Step 2: list reducers in combineReducers object


const rootReducer = combineReducers({
	todo: TodoReducer
})

export default rootReducer;
