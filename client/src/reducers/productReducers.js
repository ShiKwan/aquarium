import {
    PRODUCT_NAME, PRODUCT_DETAILS, PRODUCT_PRIMARY_IMAGE
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_NAME:
            return { ...state, ...action.payload }
        case PRODUCT_DETAILS :
            return { ...state, ...action.payload}
        case PRODUCT_PRIMARY_IMAGE :
            return { ...state, ...action.payload }
        default:
            return state;
    }
}