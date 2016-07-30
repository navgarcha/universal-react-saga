import { PHOTOS_RECEIVE, PHOTOS_CLEANUP } from 'actions/photos';

export default (state = {}, action) => {
    switch (action.type) {
        case PHOTOS_RECEIVE:
            return {
                ...state,
                ...action.payload
            };

        case PHOTOS_CLEANUP:
            const { [action.id]: omit, ...newState } = state;
            return newState;

        default:
            return state;
    }
};
