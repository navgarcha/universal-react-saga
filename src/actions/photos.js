export const PHOTOS_REQUEST = 'PHOTOS_REQUEST';
export const PHOTOS_RECEIVE = 'PHOTOS_RECEIVE';
export const PHOTOS_CLEANUP = 'PHOTOS_CLEANUP';

export function requestPhotos(id) {
    return {
        type: PHOTOS_REQUEST,
        uri: `/photos?albumId=${id}`,
        id
    };
}

export function receivePhotos(id, payload) {
    return {
        type: PHOTOS_RECEIVE,
        payload: {[id]: payload}
    };
}

export function cleanupPhotos(id) {
    return {
        type: PHOTOS_CLEANUP,
        id
    };
}
