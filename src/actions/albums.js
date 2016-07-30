export const ALBUMS_REQUEST = 'ALBUMS_REQUEST';
export const ALBUMS_RECEIVE = 'ALBUMS_RECEIVE';

export function requestAlbums() {
	return {
		type: ALBUMS_REQUEST,
        uri: '/albums'
	};
}

export function receiveAlbums(payload) {
	return {
		type: ALBUMS_RECEIVE,
		payload
	};
}
