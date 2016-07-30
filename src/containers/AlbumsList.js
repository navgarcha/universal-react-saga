import { connect } from 'react-redux';
import { requestAlbums } from 'actions/albums';
import { albumsSelector } from 'selectors';
import AlbumsList from 'components/AlbumsList';

const mapStateToProps = (state) => ({
	albums: albumsSelector(state)
});

export default connect(mapStateToProps, {
	requestAlbums
})(AlbumsList);
