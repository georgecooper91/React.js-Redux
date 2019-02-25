import { combineReducers } from 'redux';
import filmReducer from './FilmReducer';

export default combineReducers ({
    films: filmReducer,
    films2: filmReducer,
    films3: filmReducer
});