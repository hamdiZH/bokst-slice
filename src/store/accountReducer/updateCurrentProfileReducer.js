import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  updateCurrentProfileDataComes: {},
}

const updateCurrentProfileSlice =   createSlice({
  name: "updateCurrentProfile",
  initialState,
  reducers: {
    getUpdateCurrentProfileData: state => {
      state.loading = true
    },

    getUpdateCurrentProfileDataSuccess: (state, { payload }) => {
      state.updateCurrentProfileDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getUpdateCurrentProfileDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Action Generated from the slice
export const {
  getUpdateCurrentProfileData,
  getUpdateCurrentProfileDataSuccess,
  getUpdateCurrentProfileDataFailure } = updateCurrentProfileSlice.actions

// Selector
export const updateCurrentProfileSelector = state => state.updateCurrentProfile

export default updateCurrentProfileSlice.reducer;

// Async Thunk action
export function promoterSignupAction (values, history) {
  return async dispatch => {
    dispatch(getUpdateCurrentProfileData());
    try {
      const response = await axios.post("/api/account/profile/update", values);
      dispatch(getUpdateCurrentProfileDataSuccess(response.data, {}))

    } catch (e) {
      dispatch(getUpdateCurrentProfileDataFailure(e?.response?.data?.message, {}));
    }
  }
}
