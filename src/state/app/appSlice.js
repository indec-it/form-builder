import {createSlice} from '@reduxjs/toolkit';

import {sections} from '@config/mocks';

const initialState = {
  modal: '',
  sections
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModal: (state, action) => { state.modal = action.payload; }
  }
});

export const {setModal} = appSlice.actions;

export default appSlice.reducer;
