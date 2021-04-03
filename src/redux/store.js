import rootReducer from "./reducers/root";

const { createStore } = require("redux");

const store = createStore(rootReducer);

export default store;
