import moment from "moment";

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
