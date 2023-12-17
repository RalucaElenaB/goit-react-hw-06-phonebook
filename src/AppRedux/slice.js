import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contact: [],
  filter: '',
};

const rootReducer = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contact: [...state.contact, action.payload],
      };
    },
    removeContact: (state, action) => {
      return {
        ...state,
        contact: state.contact.filter(contact => contact.id !== action.payload),
      };
    },
    filterContacts: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});
export const { addContact, removeContact, filterContacts } =
  rootReducer.actions;
export default rootReducer.reducer;
