import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  changePasswordDataComes: {},
}

const changePasswordSlice =   createSlice({
  name: "changePasswordReducer",
  initialState,
  reducers: {
    getChangePasswordData: state => {
      state.loading = true
    },

    getChangePasswordSuccess: (state, { payload }) => {
      state.changePasswordDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getChangePasswordFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Action Generated from the slice
export const { getChangePasswordData,
  getChangePasswordSuccess,
  getChangePasswordFailure } = changePasswordSlice.actions

// Selector
export const changePasswordSelector = state => state.changePassword;

export default changePasswordSlice.reducer;

// Async Thunk action
export function promoterSignupAction (values, history) {
  return async dispatch => {
    dispatch(getChangePasswordData());
    try {
      const response = await axios.post("/api/account/signup/", values);
      dispatch(getChangePasswordSuccess(response.data, {}))

      history.push("/register-successfully");
    } catch (e) {
      dispatch(getChangePasswordFailure(e?.response?.data?.message, {}));
    }
  }
}
