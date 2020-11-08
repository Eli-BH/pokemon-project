import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_LOGOUT,
} from "../constants/userConstants";

//reducer for login
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    //user login request for data
    case USER_LOGIN_REQUEST:
      return { loading: true };

    //user login request success response
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    //user login request fail response
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    //user logout
    case USER_LOGOUT:
      return {};

    //user logout , clear persisted state
    default:
      return state;
  }
};

//reducer for register
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    //user details post, req
    case USER_REGISTER_REQUEST:
      return { loading: true };
    //user details post, res
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    //user detail post fail res
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//reducer to get user details
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.payload) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
