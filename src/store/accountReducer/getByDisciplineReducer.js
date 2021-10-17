import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  getByDisciplinesDataComes: [],
}

const getByDisciplinesSlice = createSlice({
  name: "getByDisciplinesReducer",
  initialState,
  reducers: {
    getByDisciplinesData: state => {
      state.loading = true
    },

    getByDisciplinesDataSuccess: (state, { payload }) => {
      state.getByDisciplinesDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getByDisciplinesDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Actions Generated from the slice
export const {
  getByDisciplinesData,
  getByDisciplinesDataSuccess,
  getByDisciplinesDataFailure } = getByDisciplinesSlice.actions

// Selector
export const getDisciplinesSelector = state => state.getByDisciplines;

export default getByDisciplinesSlice.reducer;

// Async Thunk action
export function getByDisciplinesAction () {
  return async dispatch => {
    dispatch(getByDisciplinesData());
    try {
      const response = await axios.post("api/account/get_by/class");
      dispatch(getByDisciplinesDataSuccess(response.data, {}))

    } catch (e) {
      dispatch(getByDisciplinesDataFailure(e?.response?.data?.message, {}));
    }
  }
}

