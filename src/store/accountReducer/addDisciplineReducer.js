import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  addDisciplinesDataComes: [],
}

const addDisciplinesSlice = createSlice({
  name: "getByDisciplinesReducer",
  initialState,
  reducers: {
    addDisciplinesData: state => {
      state.loading = true
    },

    addDisciplinesDataSuccess: (state, { payload }) => {
      state.getByDisciplinesDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    addDisciplinesDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Actions Generated from the slice
export const {
  addDisciplinesData,
  addDisciplinesDataSuccess,
  addDisciplinesDataFailure } = addDisciplinesSlice.actions

// Selector
export const getDisciplinesSelector = state => state.addDisciplines;

export default addDisciplinesSlice.reducer;

// Async Thunk action
export function getByDisciplinesAction () {
  return async dispatch => {
    dispatch(addDisciplinesData());
    try {
      const response = await axios.post("api/account/get_by/class");
      dispatch(addDisciplinesDataSuccess(response.data, {}))

    } catch (e) {
      dispatch(addDisciplinesDataFailure(e?.response?.data?.message, {}));
    }
  }
}

