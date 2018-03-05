import keducer from "../utils/keducer";

export const USERS_SET = "userList.SET";
export const USER_ADD = "userList.ADD";
export const USER_UPDATE = "userList.UPDATE";
export const USER_REMOVE = "userList.REMOVE";

// const defaultUserDoc = {
//   name: "First Last",
//   email: "email@g.com",
//   payHour: 19,
//   startDate: moment("2015-07-10").valueOf(), //Date.now(),
// };

export default keducer(
  "userList",
  {
    [USER_ADD]: (state, payload) => {
      return [...state, payload];
    },
    [USER_UPDATE]: (state, payload) => {
      return state.map(item => {
        return item.id === payload.id
          ? { ...item, ...payload, id: item.id }
          : item;
      });
    },
    [USER_REMOVE]: (state, payload) => {
      return state.filter(({ id }) => id !== payload.id);
    },
    [USERS_SET]: (state, payload) => {
      return payload;
    }
  },
  []
);
