import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  console.log("apiCallStatusReducer", action);
  if (action.type == types.BEGIN_API_CALL) {
    console.log("apiCallStatusReducer increasing to ", state + 1);
    return state + 1;
  } else if (
    action.type == types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    console.log("apiCallStatusReducer decreasing to ", state + 1);
    return state - 1;
  }
  return state;
}
