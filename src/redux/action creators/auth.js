import * as actions from "@redux/actions";

export const setLoading = (data) => ({
  type: actions.LOADING,
  payload: data,
});
