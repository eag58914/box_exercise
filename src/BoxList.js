import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: [ { height: 0, width: 0, backgroundColor: '' } ]
		};
		this.addBoxes = this.addBoxes.bind(this);
	}

	addBoxes(box) {
		this.setState((state) => ({
			boxes: [ ...state.boxes, box ]
		}));
	}

	renderBoxes() {
		return (
			<div>
				{this.state.boxes.map((item) => (
					<Box height={item.height} width={item.width} backgroundColor={item.backgroundColor} />
				))}
			</div>
		);
	}
	render() {
		return (
			<div>
				<h1>Box List</h1>
				{this.renderBoxes()}
				<NewBoxForm addBoxes={this.addBoxes} />
			</div>
		);
	}
}

export default BoxList;
