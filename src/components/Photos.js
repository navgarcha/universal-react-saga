import { Component, PropTypes } from 'react';

export default class Photos extends Component {
	static propTypes = {
        requestPhotos: PropTypes.func.isRequired,
        photos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            thumbnailUrl: PropTypes.string.isRequired
        }))
	}

	componentWillMount() {
		this.props.requestPhotos();
	}

	render() {
		return (
			<div>
				<h2>Album {this.props.params.albumId}</h2>

				{this.props.photos ? this.props.photos.map(({ id, thumbnailUrl }) =>
					<img key={id} src={thumbnailUrl} />
				) : 'Loading...'}
			</div>
		);
	}
}
