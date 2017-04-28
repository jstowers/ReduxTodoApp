import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import action creator
import { addTodo } from '../actions/index';

import TodoList from '../components/todo_list';

class AddTodo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todoItem: ''
		}
	}

	onInputChange = (event) => {

		this.setState({ todoItem: event.target.value });
	}

	onSubmit = (event) => {

		event.preventDefault();
		this.props.addTodo(this.state.todoItem);
		this.setState({ todoItem:'' });
	}

	render() {
		return (
			<div>
				<form
					onSubmit={ this.onSubmit }
					className="input-group">
					<input 
						placeholder="What needs to be done?"
						className="form-control"
						value={ this.state.todoItem }
						onChange= { this.onInputChange } 
					/>
					<span className="input-group-btn">
						<button
							type="submit"
							className="btn btn-primary">Add Todo
						</button>
					</span>
				</form>
				<TodoList />
			</div>
		);
	}
}

export default connect(null, { addTodo })(AddTodo);

/*

connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

It does not modify the component class passed to it; 
instead, it returns a new, connected component class for you 
to use.

*/


