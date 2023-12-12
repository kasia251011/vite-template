import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentSessionContext {
  example: number;
}

const initialState: CurrentSessionContext = {
  example: 0
};

const currentSessionSlice = createSlice({
  name: 'currentSession',
  initialState,
  reducers: {
    setExample(state, action: PayloadAction<number>) {
      state.example = action.payload;
    }
  }
});

export const { setExample } = currentSessionSlice.actions;
export default currentSessionSlice.reducer;
