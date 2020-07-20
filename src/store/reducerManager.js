import { combineReducers } from "redux";
import loginReducer from "../screens/login/loginReducers";
const rootReducer = combineReducers({
  loginDetails: loginReducer
});
export default rootReducer;
