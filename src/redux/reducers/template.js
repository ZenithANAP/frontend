import * as actions from "@redux/actions";

const templateReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GREET:
      return state;

    default:
      return state;
  }
};

export default templateReducer;
