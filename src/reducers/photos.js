import { PHOTOS_RECEIVE } from 'actions/photos';

export default (state = {}, action) => {
    switch (action.type) {
        case PHOTOS_RECEIVE:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};
