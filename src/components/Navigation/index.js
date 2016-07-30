import { Component } from 'react';
import NavigationLink from './NavigationLink';

if (process.env.BROWSER) {
    require('./styles.css');
}

export default class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<NavigationLink to="/" onlyActiveOnIndex>Home</NavigationLink>
				<NavigationLink to="/albums">Albums</NavigationLink>
			</div>
		);
	}
}
