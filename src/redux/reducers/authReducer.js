import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../constants/actionTypes";

const initialState = {
  accessToken: sessionStorage.getItem("fz-tube-accessToken")
    ? sessionStorage.getItem("fz-tube-accessToken")
    : null,
  user: sessionStorage.getItem("fz-tube-userProfile")
    ? JSON.parse(sessionStorage.getItem("fz-tube-userProfile"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        accessToken: payload,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        loading: false,
        accessToken: null,
        error: payload,
      };

    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };
    default:
      return prevState;
  }
};
