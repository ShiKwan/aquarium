import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';
import productReducers from './productReducers';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    product : productReducers,
});