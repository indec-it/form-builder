import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modal: ''
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
