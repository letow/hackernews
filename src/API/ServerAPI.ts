import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const url = "https://hacker-news.firebaseio.com/v0/newstories.json";
  const response = await fetch(url);
  return await response.json();
});

export const fetchOneItem = createAsyncThunk(
  "news/fetchOneItem",
  async (itemId: number) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
    const response = await fetch(url);
    return await response.json();
  }
);
