import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";
import {
  getCurrentProfileData,
  getCurrentProfileDataFailure,
  getCurrentProfileDataSuccess
} from "./currentProfileReducer";

export const initialState = {
  loading: false,
  hasErrors: false,
  weightClassDataComes: {},
}

const weightClassSlice = createSlice({
  name: "getWeightClassReducer",
  initialState,
  reducers: {
    getWeightClassData: state => {
      state.loading = true
    },

    getWeightClassDataSuccess: (state, { payload }) => {
      state.weightClassDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getWeightClassDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Actions Generated from the slice
export const {
  getWeightClassData,
  getWeightClassDataSuccess,
  getWeightClassDataFailure } = weightClassSlice.actions

// Selector
export const getWeightClassSelector = state => state.getWeightClass;

export default weightClassSlice.reducer;

// Async Thunk action
export function getWeightClassAction () {
  return async dispatch => {
    dispatch(getWeightClassData());
    try {
      const response = await axios.get("/api/account/weight_class/120");
      dispatch(getWeightClassDataSuccess(response.data, {}))

    } catch (e) {
      dispatch(getWeightClassDataFailure(e?.response?.data?.message, {}));
    }
  }
}

