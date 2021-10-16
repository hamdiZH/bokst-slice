import {createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  requestVerificationDataComes: {},
}

const requestVerificationSlice = createSlice({
  name: 'requestVerificationReducer',
  initialState,
  reducers: {
    getRequestVerificationData: state => {
      state.loading = true
    },

    getRequestVerificationDataSuccess: (state, { payload }) => {
      state.requestVerificationDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getRequestVerificationDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

// Three Actions Generated from the slice
export const { getRequestVerificationData,
  getRequestVerificationDataSuccess,
  getRequestVerificationDataFailure } = requestVerificationSlice.actions

// Selector
export const requestVerificationSelector = state => state.requestVerification;

export default requestVerificationSlice.reducer;

// Async Thunk action
export function requestVerificationAction (values, history) {
  return async dispatch => {
    dispatch(getRequestVerificationData());
    try {
      const response = await axios.post("/api/account/verify/request/", values.email);
      dispatch(getRequestVerificationDataSuccess(response.data, {}))

      history.push("/login");
    } catch (e) {
      dispatch(getRequestVerificationDataFailure(e?.response?.data?.message, {}));
    }
  }
}

