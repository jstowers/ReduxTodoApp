import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import action creator
import { addTodo } from '../actions/index';

class AddTodo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todoItem: ''
		}
	}

	// sets state for change in todo item
	onInputChange = (event) => {
		console.log('onInputChange event =', event);

		this.setState( { todoItem: event.target.value });
	}

	onFormSubmit = (event) => {

		console.log('onFormSubmit event =', event);

		event.preventDefault();

		this.props.addTodo(this.state.todoItem);

		this.setState({ term:'' });
	}

	render() {
		return (
			<form
				onSubmit={ this.onFormSubmit }
				className="input-group">
				<input 
					placeholder="What do you want to do?"
					className="form-control"
					value={ this.state.todoItem }
					onChange= { this.onInputChange } />
				<span className="input-group-btn">
					<button
						type="submit"
						className="btn btn-secondary">Add Todo
					</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodo);