import { FETCH_FILMS, FETCH_FILMS2, FETCH_FILMS3 } from './Types';

export const fetchFilms = () => dispatch => {
    fetch('http://www.omdbapi.com/?s=Matrix&apikey=720c3666')
    .then(res => res.json())
    .then(films =>
        dispatch({
            type: FETCH_FILMS,
            payload: films.Search
        }),
    );
};

export const fetchFilms2 = () => dispatch => {
    fetch("http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666")
    .then(res => res.json())
    .then(films =>
        dispatch({
            type: FETCH_FILMS2,
            payload: films.Search
        })
    );
};

export const fetchFilms3 = () => dispatch => {
    fetch("http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666")
    .then(res => res.json())
    .then(films =>
        dispatch({
            type: FETCH_FILMS3,
            payload: films.Search
        })
    );
};