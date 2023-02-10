import { createSlice } from "@reduxjs/toolkit";

import type { User } from "../../util/types";

type InitialState = {
  data: User | null
}

const initialState: InitialState = {
  data: null
} 

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.data = { ...payload };
    }
  }
})

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;