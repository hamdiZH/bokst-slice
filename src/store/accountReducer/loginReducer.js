import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import Cookies from "js-cookie";

export const initialState = {
  loading: false,
  hasErrors: false,
  isAuthenticated: false,
  loginDataComes: {},
}

const loginSlice = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {
    getLoginData: state => {
      state.loading = true
    },

    getLoginDataSuccess: (state, { payload }) => {
      state.isAuthenticated = true
      state.loginDataComes = payload
      state.loading = false
      state.hasErrors = false
    },

    getLoginDataFailure: (state, { payload }) => {
      state.loading = false
      state.hasErrors = payload
    },
  },
});

//Three action generated from the slice
export const { getLoginData, getLoginDataSuccess, getLoginDataFailure } = loginSlice.actions

// Selector
export const loginSelector = state => state.login;

export default loginSlice.reducer;

//Async thunk action
export function loginAction(values, history) {
  return async dispatch => {
    dispatch(getLoginData())

    try{
      const response = await axios.post("/api/account/login/", values);
      Cookies.set("accessToken", response.data.data.tokens.access, {expires: 3600});

      dispatch(getLoginDataSuccess(response.data, {}));
      history.push("/");

    }catch (e) {
      dispatch(getLoginDataFailure(e?.response?.data?.message, {}));
    }
  }
}





