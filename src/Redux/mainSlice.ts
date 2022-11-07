import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    todos: ["a", "b", "c"],
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
});

export default mainSlice.reducer;
export const { increment, decrement, addTodo } = mainSlice.actions;
