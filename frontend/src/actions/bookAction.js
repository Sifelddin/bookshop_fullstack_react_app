import {
  BOOK_DETAILS_REQUIEST,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUIEST,
  BOOK_LIST_SUCCESS,
  BOOK_DETAILS_SUCCESS,
  BOOK_DETAILS_FAIL,
} from '../constants/bookConstants';
import Axios from 'axios';
export const listBooks = () => async (dispatch) => {
  dispatch({
    type: BOOK_LIST_REQUIEST,
  });
  try {
    const { data } = await Axios.get('/api/books');
    dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BOOK_LIST_FAIL, payload: error.message });
  }
};

export const detailsBook = (bookId) => async (dispatch) => {
  dispatch({ type: BOOK_DETAILS_REQUIEST, payload: bookId });
  try {
    const { data } = Axios.get(`/api/books/${bookId}`);
    dispatch({ type: BOOK_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
