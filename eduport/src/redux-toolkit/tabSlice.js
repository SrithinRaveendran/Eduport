// features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tab : "All"
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    tabchange: (state, action) => {
      state.tab = action.payload;
      
      
    },

  
  },
});

export const { tabchange } = tabSlice.actions;
export default tabSlice.reducer;