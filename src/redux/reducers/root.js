import authReducer from "./auth";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
