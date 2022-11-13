import {
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUIEST,
  BOOK_LIST_SUCCESS,
} from '../constants/bookConstants';
export const bookListReducer = (
  state = { loading: true, books: [] },
  action,
) => {
  switch (action.type) {
    case BOOK_LIST_REQUIEST:
      return { loading: true };
    case BOOK_LIST_SUCCESS:
      return { loading: false, books: action.payload };
    case BOOK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookDetailsReducer = (
  state = { product: {}, loading: true },
  action,
) => {
  switch (action.type) {
    case BOOK_LIST_REQUIEST:
      return { loading: true };
    case BOOK_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case BOOK_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
