import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/Index';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware)
))

//Subscribe to store then send data to Db every time it is updated
store.subscribe(() => {
    console.log('state updated');
    const state = store.getState();
    const stateFilm = state["films"];
    const stateFilm2 = state["films2"];
    const stateFilm3 = state["films3"];
    console.log(stateFilm);
    (async () => {
        fetch('/api/films/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ stateFilm, stateFilm2, stateFilm3 })
        });
    })();
});

export default store;