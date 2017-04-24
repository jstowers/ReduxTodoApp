import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action creator
import { listTodos } from '../actions/index';

class TodoList extends Component {

	componentDidMount() {
		console.log('TodoList Did Mount!!');
	}

	render() {

		console.log('this.props =', this.props);

		return (
			<div>
				THIS IS A TEST!
			</div>
		);
	}
}

function mapStateToProps({ todos }) {
	return todos;
}

export default connect(mapStateToProps)(TodoList);