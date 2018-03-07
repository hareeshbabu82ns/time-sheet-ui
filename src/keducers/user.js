import moment from "moment";
import axios from "axios";

import { iam } from "../config/auth";
import keducer from "../utils/keducer";

export const USER_AUTHENTICATED = "User.Authenticated";
export const USER_CLEAR = "User.Clear";

const defaultUserState = {
  id: "",
  name: ""
};

export default keducer(
  "User",
  {
    [USER_AUTHENTICATED]: (state, payload) => {
      return {
        ...state,
        ...payload
      };
    },
    [USER_CLEAR]: (state, payload) => ({
      ...defaultUserState
    })
  },
  defaultUserState
);

export const startFetchingAuthUser = () => {
  return (dispatch, getState) => {
    axios.get(`${iam.url}/user/token/${iam.getCookie()}`, {
      headers: {
        Cookie: `jwt=${iam.getCookie()};`
      }
    }).then(response => {
      dispatch({ type: USER_AUTHENTICATED, payload: response.data });
    }).catch(err => {
      return Promise.reject("User Not Loggedin");
    });
  };
};