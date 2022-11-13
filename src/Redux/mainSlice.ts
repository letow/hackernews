import { createSlice } from "@reduxjs/toolkit";
import { fetchNews, fetchOneItem } from "../API/ServerAPI";
import { NewsData } from "../Types/NewsData";
import { State } from "../Types/State";
import { CommentData } from "../Types/CommentData";

const mainSlice = createSlice({
  name: "news",
  initialState: {
    status: "",
    news: [],
    lastNewsIDs: [],
  } as State,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.status = "done";
      state.lastNewsIDs = action.payload;
      state.lastNewsIDs.length = 20;
      state.news = [];
    });

    builder.addCase(fetchOneItem.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchOneItem.fulfilled, (state, action) => {
      state.status = "done";
      if (action.payload.type === "story") {
        state.news.push({
          id: action.payload.id,
          rating: action.payload.score,
          username: action.payload.by,
          date: new Date(action.payload.time * 1000).toLocaleString(),
          title: action.payload.title,
          kidsIds: action.payload.kids,
          kids: [],
          descendants: action.payload.descendants,
          url: action.payload.url,
        } as NewsData);

        if (state.news.length === state.lastNewsIDs.length)
          state.news.sort((a, b) => (a.date < b.date ? 1 : -1));
      } else if (action.payload.type === "comment") {
        const payload = {
          username: action.payload.by,
          id: action.payload.id,
          kidsIds: action.payload.kids,
          kids: [],
          parent: action.payload.parent,
          text: action.payload.text,
          time: new Date(action.payload.time * 1000).toLocaleString(),
        } as CommentData;

        const newsId = JSON.parse(JSON.stringify(state)).news.findIndex(
          (obj: NewsData) => obj.id === action.payload.parent
        );
        if (newsId !== -1) {
          state.news[newsId].kids.push(payload);
        }
      }
    });
  },
});

export default mainSlice.reducer;
