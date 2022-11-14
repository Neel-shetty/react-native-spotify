import { createSlice } from "@reduxjs/toolkit";
import PlaylistData from "../../../../assets/dummydata/PlaylistData";
import previewData from "../../../../assets/dummydata/previewData";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { useState } from "react";

const [songStatus, setSongStatus] = useState(null)

const initialState = {
  songDetails: songStatus,
};

const songSlice = createSlice({
  name: "songDetails",
  initialState,
  reducers: {
    // setIsPlayingFalse: (state, action)=>{
    //   state.isPlaying = true
    // }
    pause: (state) => {
      Sound.createAsync({shouldPlay: false})
      state.songDetails.isPlaying = false
    },
  },
});
