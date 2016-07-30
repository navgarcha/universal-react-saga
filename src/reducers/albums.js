import { ALBUMS_RECEIVE } from 'actions/albums';

export default (state = null, action) => {
	switch (action.type) {
		case ALBUMS_RECEIVE:
			return action.payload;

		default:
			return state;
	}
};
