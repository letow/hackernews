import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { DATE_FORMAT } from "../Constants";

const mainSlice = createSlice({
  name: "counter",
  initialState: {
    news: [
      {
        id: 5432,
        rating: 5,
        username: "Ryan_Gosling",
        date: "12.12.2022 14:33:32",
        title: `"What you know about rolling down in the deep": Florida man drowned in cringe trying to watch TikTok.`,
      },
    ],
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
});

export default mainSlice.reducer;
export const { increment } = mainSlice.actions;
