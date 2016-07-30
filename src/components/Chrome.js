import { Component, PropTypes } from 'react';
import Navigation from 'components/Navigation';

export default class Chrome extends Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		])
	}

	render() {
		return (
			<div>
				<Navigation />

				{this.props.children}
			</div>
		);
	}
}
