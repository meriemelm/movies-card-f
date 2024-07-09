import { createStore, applyMiddleware, combineReducers } from 'redux';
import moviesReducer from './reducers/moviesReducer';
import { thunk } from 'redux-thunk';
const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 

