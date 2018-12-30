import {
    PRODUCT_NAME, PRODUCT_DETAILS, PRODUCT_PRIMARY_IMAGE
} from './types';
import { product1, product2 } from '../productConstant';

export const submitUserAbout = (objUserAbout) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_NAME,
            payload: objUserAbout
        })
    }
}
export const getProductDetails = (prodName) => {

    return(dispatch) => {
        dispatch({
            type : PRODUCT_DETAILS,
            payload: getDetails(prodName)
        })
    }
}

export const renderPrimaryImg = (img) => {
    return(dispatch) => {
        dispatch({
            type : PRODUCT_PRIMARY_IMAGE,
            payload : {primaryImage : img}
        })
    }
}

function getDetails(prod){
    let item = {};
    switch (prod) {
        case `tank1`:
            item = product1;
            break;
        case `tank2`:
            item = product2;
            break;
        default:
            item = {};

            break;
    }
    return item;
}