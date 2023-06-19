import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getStations } from "../../api/stations";
import type { RootState } from "../store";
import { sortStationsByPopularity } from "../../utils";
import { createSelector } from 'reselect'

export interface IRadioStation {
  id: string;
  description: string;
  name: string;
  imgUrl: string;
  streamUrl: string;
  reliability: number;
  popularity: number;
  tags: string[];
}

export interface IRadioStationState {
  stations: IRadioStation[];
  loading: boolean;
  error: string | undefined;
}

const initialState: IRadioStationState = {
  stations: [],
  loading: false,
  error: undefined,
};

export const fetchStations = createAsyncThunk(
  "stations/fetchStations",
  () => getStations()
);

export const stationsSlice = createSlice({
  name: "stations",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchStations.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });

    builder.addCase(
      fetchStations.fulfilled,
      (state, action: PayloadAction<IRadioStation[]>) => {
        state.loading = false;
        state.stations = action.payload;
      }
    );

    builder.addCase(fetchStations.rejected, (state, action) => {
      state.loading = false;
      state.stations = [];
      state.error = action.error.message;
    });
  },
  reducers: {}
});


export const selectLoading = (state: RootState) => state.stationsReducer.loading
export const selectStations = (state: RootState) => state.stationsReducer.stations

export const popularStationsSelector = createSelector([selectLoading, selectStations], (loading, stations) => {
  return {
    loading,
    stations: sortStationsByPopularity(stations)
  }
})

export const stationByIdSelector = (state: RootState, id: string) =>
  state.stationsReducer.stations.find((station: IRadioStation) => station.id === id);
  

export default stationsSlice.reducer;
