import { createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {},
  reducers: {
    addStats(state, action) {
      state = action.payload;
    },
  },
});

export const { addStats } = dateSlice.actions;

export default dateSlice.reducer;
