import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  disciplinesDataComes: {},
}

const disciplinesSlice = createSlice({
  name: "getDisciplinesReducer",
  initialState,
  reducers: {
    getDisciplinesData: state => {
      state.loading = true
    },

    getDisciplinesDataSuccess: (state, { payload }) => {
      state.disciplinesDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getDisciplinesDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Actions Generated from the slice
export const {
  getDisciplinesData,
  getDisciplinesDataSuccess,
  getDisciplinesDataFailure } = disciplinesSlice.actions

// Selector
export const getDisciplinesSelector = state => state.getDisciplines;

export default disciplinesSlice.reducer;

// Async Thunk action
export function getDisciplinesAction () {
  return async dispatch => {
    dispatch(getDisciplinesData());
    try {
      const response = await axios.get("/api/account/get_list/disciplines");
      dispatch(getDisciplinesDataSuccess(response.data, {}))

    } catch (e) {
      dispatch(getDisciplinesDataFailure(e?.response?.data?.message, {}));
    }
  }
}

