import { Component } from 'react';

export default class Albums extends Component {
	render() {
		return (
			<div>
				<h1>Albums Page</h1>

				{this.props.children}
			</div>
		);
	}
}
