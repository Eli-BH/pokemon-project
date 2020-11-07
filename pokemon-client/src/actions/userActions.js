import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const register = (username, email, password) => async (disptach) => {
  try {
    disptach({
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
      "/api/users",
      { username, email, password },
      config
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });

    //auto login after register
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //add the data to the local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    disptach({
      type: USER_REGISTER_FAIL,
      payload: error.message,
    });
  }
};

export const login =(email, password)=>(dispatch)=>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config ={
            header: {
                "Content-Type":"application/json"
            }
        }; 

        //destructure the data
        const {data} = await axios.post(
            "/api/users/login", 
            {email, password}, 
            config
        ); 
        disptach({
            type: USER_LOGIN_SUCCESS, 
            payload: data
        })

        //set the user to local storage
        localStorage.setItem("userInfo", JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL, 
            payload: error.message
        })
    }
}