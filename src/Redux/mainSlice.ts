import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { fetchNews } from "../API/ServerAPI";
import { DATE_FORMAT } from "../Constants";

const mainSlice = createSlice({
  name: "news",
  initialState: {
    status: "",
    news: [
      {
        id: 5432,
        rating: 5,
        username: "Ryan_Gosling",
        date: "12.12.2022 14:33:32",
        title:
          '"What you know about rolling down in the deep": Florida man drowned in cringe trying to watch TikTok.',
      },
      {
        id: 7654,
        rating: 4.5,
        username: "MickeyMouseAK47",
        date: "11.11.2011 14:33:32",
        title: "Hello there",
      },
    ],
    lastNewsIDs: [1],
  },
  reducers: {
    increment(state) {
      state.news.push({
        ...state.news[0],
        id: Math.floor(Math.random() * 10000),
        date: moment(new Date()).format(DATE_FORMAT),
        rating: Number((1 + Math.random() * 4).toFixed(1)),
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.status = "done";
      state.lastNewsIDs = action.payload;
      state.lastNewsIDs.length = 100;
    });
  },
});

export default mainSlice.reducer;
export const { increment } = mainSlice.actions;
