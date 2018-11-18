import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counter/redux";
import { logger } from "./middleware/logger";
import { sample } from "./middleware/sample";

import { ephemeralMiddlewares, ephemeralReducers } from "./ephemeral-helpers";

const middleware = [thunk, sample, ...ephemeralMiddlewares, logger];

const mainReducer = combineReducers({
  counter: counterReducer,
  ...ephemeralReducers
});

const createAppStore = initialState =>
  createStore(
    mainReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

export const store = createAppStore({});
