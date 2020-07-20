import API_URL_CONSTANTS from "../../constants/apiUrlConstants";
import { postMethod } from "../../helper/api";

export const emitEventToReducer = (type, payload) => ({
  type,
  payload
});

export const handleLogin = () => async dispatch => {
  dispatch(emitEventToReducer("LOGIN_REQUESTED"));
  try {
    const loginResponse = await postMethod(API_URL_CONSTANTS.LOGIN);
    dispatch(emitEventToReducer("LOGIN_SUCCESS", loginResponse));
  } catch (exc) {
    dispatch(emitEventToReducer("LOGIN_FAILURE", error.message));
  }
};
