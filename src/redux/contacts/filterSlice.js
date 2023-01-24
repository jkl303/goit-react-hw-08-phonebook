import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { val: '' },
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.val = action.payload;
      },
      prepare(filter) {
        return { payload: filter };
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
