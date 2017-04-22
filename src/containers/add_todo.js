import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import action creator
import { addTodo } from '../actions/index';

class AddTodo extends Component {

	onSubmit = (event) => {

		console.log('inside onSubmit event');
		//event.preventDefault();
		this.props.addTodo(event.target.value);

	}

	render() {
		return (
			<form
				onSubmit={ this.onSubmit }
				className="input-group">
				<input 
					placeholder="What needs to be done?"
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

export default connect(null, { addTodo })(AddTodo);