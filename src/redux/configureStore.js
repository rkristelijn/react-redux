import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
// This will warn us if we accidentally mutate state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  // add support for Redux dev tools
  console.log("configureStore", initialState);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
