import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataInterface } from "../../common/interfaces";

const initialState: DataInterface = {
  status: "idle",
  data: null,
};

export const fetchUsersList = createAsyncThunk(
  "users/fetchUsersList",
  async () => {
    let appID: string = process.env.REACT_APP_APP_ID || "";
    let api: string = process.env.REACT_APP_DUMMY_API || "";
    const response = await fetch(api, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "app-id": appID,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const data = await response.json();
    return data;
  }
);

export const usersListSlice = createSlice({
  name: "fetchUsersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchUsersList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const usersListInfo = (state: any) => state.usersList;

const usersListReducers = usersListSlice.reducer;
export default usersListReducers;
