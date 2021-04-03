import templateReducer from "./template";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  templateReducer,
});

export default rootReducer;
