import axios from "axios";
import { server } from "../store";
import { login , userInfo } from '../reducers/userReducer';


export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post( `${server}/auth/login`, userData);
    dispatch(login(response.data));
  } catch (error) {
    console.error('Error logging in:', error);
  }
};


export const getMe = (token) => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(userInfo(response.data));
  } catch (error) {
    
  }
};


const fetchData = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/auth/me', {
      headers: {
        Authorization: 'Bearer /* YOUR_TOKEN_HERE */',
      },
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};