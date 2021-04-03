import * as actions from "@redux/actions";

const initState = {
  loading: true,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
