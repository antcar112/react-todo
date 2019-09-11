import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task : ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.task !== '') {
			this.props.createTodo({
				...this.state,
				id: uuid(),
				completed: false
			});
			this.setState({
				task : ''
			});
		}
	}
	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="task">New Todo</label>
				<input
					type="text"
					placeholder="New Todo"
					name="task"
					id="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button type="submit">Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
