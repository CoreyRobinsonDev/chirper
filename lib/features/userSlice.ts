import { createSlice } from "@reduxjs/toolkit";

import type { User } from "../../util/types";


const initialState: User = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  uid: null
} 

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.displayName = payload.displayName;
      state.email =  payload.email;
      state.phoneNumber =  payload.phoneNumber;
      state.photoURL =  payload.photoURL;
      state.uid =  payload.uid;
    }
  }
})

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;