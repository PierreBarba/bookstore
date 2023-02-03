import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiUrlGet = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/w3x3m58Cm8F6RcBgWfYT/books';
const ApiUrlPost = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/w3x3m58Cm8F6RcBgWfYT/books';
const ApiDelete = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/w3x3m58Cm8F6RcBgWfYT/books/';
const API_ADD_BOOK = 'BOOK-STORE/books/API_ADD_BOOK';
const API_REMOVE_BOOK = 'BOOK-STORE/books/API_REMOVE_BOOK';
const INFO_GET_API = 'BOOK-STORE/books/INFO_GET_API';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case `${API_ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${API_REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);
    case `${INFO_GET_API}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const catchApiBook = createAsyncThunk(INFO_GET_API,
  async () => axios.get(ApiUrlGet).then((response) => {
    const objetsList = Object.keys(response.data).map((key) => (
      {
        id: key, ...response.data[key][0],
      }
    ));
    return objetsList;
  }));

export const attachApiBook = createAsyncThunk(API_ADD_BOOK,
  async (book) => axios.post(ApiUrlPost, book)
    .then(() => book));

export const detachApiBook = createAsyncThunk(API_REMOVE_BOOK,
  async (id) => axios.delete(ApiDelete + id, id)
    .then(() => id));

export default bookReducer;
