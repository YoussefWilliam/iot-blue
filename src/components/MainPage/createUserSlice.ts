import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataInterface } from "../../common/interfaces";

const initialState: DataInterface = {
  status: "idle",
  data: null,
};

export const createNewUser = createAsyncThunk(
  "users/createNewUser",
  async ({
    firstName,
    lastName,
    email,
  }: {
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    let appID: string = process.env.REACT_APP_APP_ID || "";
    let api: string = process.env.REACT_APP_DUMMY_API || "";
    const response = await fetch(`${api}/create`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "app-id": appID,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });
    const data = await response.json();
    return data;
  }
);

export const createNewUserSlice = createSlice({
  name: "fetchUsersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(createNewUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const newUserInfo = (state: any) => state.newUser;

const createNewUserReducer = createNewUserSlice.reducer;
export default createNewUserReducer;
