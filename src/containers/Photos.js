import { connect } from 'react-redux';
import { requestPhotos } from 'actions/photos';
import { photosSelector } from 'selectors';
import Photos from 'components/Photos';

const mapStateToProps = (state, { params: { albumId } }) => ({
	photos: photosSelector(state, albumId)
});

const mapDispatchToProps = (dispatch, { params: { albumId } }) => ({
    requestPhotos: () => dispatch(requestPhotos(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
