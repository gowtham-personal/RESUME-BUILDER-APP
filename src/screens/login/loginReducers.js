const INITIAL_STATE = {
  isLoginRequested: false,
  isAuthenticated: false,
  accessToken: "",
  errorMessage: undefined
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return {
        ...state,
        isLoginRequested: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
export default loginReducer;
