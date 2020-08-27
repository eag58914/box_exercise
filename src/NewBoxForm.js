import React, { Component } from 'react';

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = { height: 10, width: 10, backgroundcolor: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.addBoxes(this.state);
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="height">Height:</label>
				<input id="height" name="height" value={this.state.height} onChange={this.handleChange} />
				<label htmlFor="width">Width:</label>
				<input id="width" name="width" value={this.state.width} onChange={this.handleChange} />
				<label htmlFor="backgroundcolor">Backgroundcolor:</label>
				<input
					id="backgroundcolor"
					name="backgroundcolor"
					value={this.state.backgroundcolor}
					onChange={this.handleChange}
				/>
				<button>Add Box</button>
			</form>
		);
	}
}

export default NewBoxForm;
