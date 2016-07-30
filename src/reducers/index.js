import { combineReducers } from 'redux';
import albums from './albums';
import photos from './photos';

export default combineReducers({
	albums,
    photos
});
