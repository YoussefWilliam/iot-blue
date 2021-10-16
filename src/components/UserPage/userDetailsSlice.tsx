import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataInterface } from "../../common/interfaces";

const initialState: DataInterface = {
  status: "idle",
  data: null,
};

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (id: string) => {
    let appID: string = process.env.REACT_APP_APP_ID || "";
    let api: string = process.env.REACT_APP_DUMMY_API || "";
    const response = await fetch(`${api}/${id}`, {
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

export const userDetailsSlice = createSlice({
  name: "fetchUserDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const userDetailsInfo = (state: any) => state.userDetails;

const userDetailsReducer = userDetailsSlice.reducer;
export default userDetailsReducer;
