import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_ADD_POKEMON_REQUEST,
  USER_ADD_POKEMON_SUCCESS,
  USER_ADD_POKEMON_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    //send application/json content
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //destructure data
    //POST to api/users takse username, email, pass
    const { data } = await axios.post(
      "/api/users/register",
      { username, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //add the data to the local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    //destructure the data
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //set the user to local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/profile`, config);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
};

export const addPokemon = (pokemon) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ADD_POKEMON_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    axios.post(`/api/users/profile`, pokemon, config);

    dispatch({
      type: USER_ADD_POKEMON_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_ADD_POKEMON_FAIL,
      payload: error,
    });
  }
};
