import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class AlbumsList extends Component {
	static propTypes = {
		albums: PropTypes.array,
	}

	componentWillMount() {
		this.props.requestAlbums();
	}

	render() {
		return (
			<div>
				{this.props.albums ? this.props.albums.map(({ id, title }, index) =>
					<div key={index}>
						<Link to={`/albums/${id}`}>{title}</Link>
					</div>
				) : 'Loading...'}
			</div>
		);
	}
}
