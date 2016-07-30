import { takeLatest } from 'redux-saga';
import { take, race, call, put, select } from 'redux-saga/effects';
import { request } from 'api';
import { PHOTOS_REQUEST, PHOTOS_CLEANUP, receivePhotos } from 'actions/photos';
import { photosSelector } from 'selectors';

function* requestPhotos({ id, uri }) {
	const cachedPhotos = yield select(photosSelector, id);

	if (!cachedPhotos) {
		try {
			const { photos, cancel } = yield race({
				photos: call(request, uri),
				cancel: take(PHOTOS_CLEANUP)
			});

			if (photos) {
				yield put(receivePhotos(id, photos));
			} else if (cancel) {
				console.log('Photos request cancelled!');
			}
		} catch (error) {
			console.log('Photos request failed!');
		}
	}
}

export function* watchRequestPhotos() {
	yield* takeLatest(PHOTOS_REQUEST, requestPhotos);
}
