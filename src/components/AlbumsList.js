import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class AlbumsList extends Component {
	static propTypes = {
        requestAlbums: PropTypes.func.isRequired,
		albums: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        }))
	}

	componentWillMount() {
		this.props.requestAlbums();
	}

	render() {
		return (
			<div>
				{this.props.albums ? this.props.albums.map(({ id, title }) =>
					<div key={id}>
						<Link to={`/albums/${id}`}>{title}</Link>
					</div>
				) : 'Loading...'}
			</div>
		);
	}
}
