import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createNewUserReducer from "../components/MainPage/createUserSlice";
import usersListReducers from "../components/MainPage/usersListSlice";
import userDetailsReducer from "../components/UserPage/userDetailsSlice";

export const store = configureStore({
  reducer: {
    usersList: usersListReducers,
    userDetails: userDetailsReducer,
    newUser: createNewUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
