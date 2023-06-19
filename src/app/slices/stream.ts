import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface StreamState {
  streamUrl: string | null;
  available: boolean
}

const initialState: StreamState = {
  streamUrl: null,
  available: false
};

const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    setStreamUrl: (state, action: PayloadAction<string>) => {
      state.streamUrl = action.payload;
    },
    nullifyStreamUrl: (state) => {
      state.streamUrl = null;
    },

    updateAllStreamState: (state, action: PayloadAction<StreamState>) => {
      state.streamUrl = action.payload.streamUrl;
      state.available = action.payload.available;
    }
  },
});

export const streamUrlSelector = (state: RootState) => state.streamReducer;

export const { setStreamUrl, nullifyStreamUrl, updateAllStreamState } = streamSlice.actions;

export default streamSlice.reducer;
