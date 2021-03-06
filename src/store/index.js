import { combineReducers } from 'redux'
import loginReducer from "./accountReducer/loginReducer";
import signupReducer from "./accountReducer/signupReducer";
import requestVerificationReducer from "./accountReducer/requestVerificationReducer"
import currentProfileReducer from "./accountReducer/currentProfileReducer"
import getDisciplinesReducer from "./accountReducer/getDisciplinesReducer";
import getWeightClassReducer from "./accountReducer/getWeightClassReducer";
import updateCurrentProfileReducer from "./accountReducer/updateCurrentProfileReducer";
import changePasswordReducer from "./accountReducer/changePasswordReducer";
import getByDisciplineReducer from "./accountReducer/getByDisciplineReducer";
import addDisciplineReducer from "./accountReducer/addDisciplineReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  requestVerification: requestVerificationReducer,
  currentProfile: currentProfileReducer,
  getDisciplines: getDisciplinesReducer,
  getByDisciplines: getByDisciplineReducer,
  addDisciplines: addDisciplineReducer,
  getWeightClass: getWeightClassReducer,
  updateCurrentProfile: updateCurrentProfileReducer,
  changePassword: changePasswordReducer,
})

export default rootReducer