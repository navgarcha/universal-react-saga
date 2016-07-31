import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { request } from 'api';
import { PHOTOS_REQUEST, receivePhotos } from 'actions/photos';
import { photosSelector } from 'selectors';

function* requestPhotos({ id, uri }) {
	const cachedPhotos = yield select(photosSelector, id);

	if (!cachedPhotos) {
		try {
			const photos = yield call(request, uri)
			yield put(receivePhotos(id, photos));
		} catch (error) {
			console.log('Photos request failed');
		}
	} else {
        console.log('Photos already in store');
    }
}

export function* watchRequestPhotos() {
	yield* takeEvery(PHOTOS_REQUEST, requestPhotos);
}
