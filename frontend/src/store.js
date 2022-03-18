import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { bookDetailsReducer, bookListReducer } from './reducers/bookReducers';
const data = {
  products: [
    {
      p: 'product1',
    },
    {
      p1: 'product1',
    },
  ],
};

const initialState = {};
const reducer = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
