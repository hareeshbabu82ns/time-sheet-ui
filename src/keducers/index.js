import { combineReducers } from "redux";

import user from "./user";
import userList from "./users_list";

const timeSheetKeducer = combineReducers({
  user,
  userList
});

export default timeSheetKeducer;
