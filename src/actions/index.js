import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actionType';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const filterBookAction = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
