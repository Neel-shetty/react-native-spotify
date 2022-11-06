import { createSlice } from "@reduxjs/toolkit";
import PlaylistData from "../../../../assets/dummydata/PlaylistData";
import previewData from "../../../../assets/dummydata/previewData";

const initialState = {
  songDetails: previewData,
  isPlaying: false,
  isLoading: true,
};

const songSlice = createSlice({
  name: "songDetails",
  initialState,
  reducers: {
    setIsPlayingFalse: (state, action)=>{
      state.isPlaying = true
    }
  }
});
