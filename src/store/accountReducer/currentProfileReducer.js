import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  currentProfileDataComes: {},
}

const currentProfileSlice = createSlice({
  name: "currentProfileReducer",
  initialState,
  reducers: {
    getCurrentProfileData: state => {
      state.loading = true
    },

    getCurrentProfileDataSuccess: (state, { payload }) => {
      state.currentProfileDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getCurrentProfileDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Actions Generated from the slice
export const {
  getCurrentProfileData,
  getCurrentProfileDataSuccess,
  getCurrentProfileDataFailure } = currentProfileSlice.actions;

// Selector
export const currentProfileSelector = state => state.currentProfile;

export default currentProfileSlice.reducer;


// Async Thunk action
export function getCurrentProfileAction () {
  return async dispatch => {
    dispatch(getCurrentProfileData());
    try {
      const response = await axios.get("/api/account/profile/");
      dispatch(getCurrentProfileDataSuccess(response.data, {}))

    } catch (e) {
      dispatch(getCurrentProfileDataFailure(e?.response?.data?.message, {}));
    }
  }
}
