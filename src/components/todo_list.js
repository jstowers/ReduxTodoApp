import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {

	componentDidMount() {
		console.log('TodoList Did Mount!!');
	}

	render() {
		return (
			<div>
				THIS IS A TEST!
			</div>
		);
	}
}

export default connect()(TodoList);