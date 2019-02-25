import { FETCH_FILMS, FETCH_FILMS2, FETCH_FILMS3 } from '../action/Types';

const initialState = {
    films: [],
    films2: [],
    films3: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_FILMS:
            return {
                ...state,
                films: action.payload
            }
        case FETCH_FILMS2:
            return {
                ...state,
                films2: action.payload,
            }
        case FETCH_FILMS3:
            return {
                ...state,
                films3: action.payload
            }
        default:
            return state;
    }
}