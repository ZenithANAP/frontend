import * as actions from "@redux/actions";

const initState = {};

const templateReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GREET:
      return state;

    default:
      return state;
  }
};

export default templateReducer;
