import { Component } from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
    require('./styles.css');
}

export default class NavigationLink extends Component {
	render() {
		return (
			<Link {...this.props} activeClassName="active" />
		);
	}
}
