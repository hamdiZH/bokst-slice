import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  signupDataComes: {},
}

const signupSlice =   createSlice({
  name: "signupReducer",
  initialState,
  reducers: {
    getSignupData: state => {
      state.loading = true
    },

    getSignupDataSuccess: (state, { payload }) => {
      state.signupDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getSignupDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Action Generated from the slice
export const { getSignupData, getSignupDataSuccess, getSignupDataFailure } = signupSlice.actions

// Selector
export const signupSelector = state => state.signup

export default signupSlice.reducer;

// Async Thunk action
export function promoterSignupAction (values, history) {
  return async dispatch => {
    dispatch(getSignupData());
    console.log("values", values);
    try {
      const response = await axios.post("/api/account/signup/", values);
      dispatch(getSignupDataSuccess(response.data, {}))

      history.push("/register-successfully");
    } catch (e) {
      dispatch(getSignupDataFailure(e?.response?.data?.message, {}));
    }
  }
}

export function coachSignupAction (values, history) {
  return async dispatch => {
    dispatch(getSignupData());
    console.log("values", values);
    try {
      const response = await axios.post("/api/account/signup/", values);
      dispatch(getSignupDataSuccess(response.data, {}))

      history.push("/register-successfully");
    } catch (e) {
      dispatch(getSignupDataFailure(e?.response?.data?.message, {}));
    }
  }
}
