import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import xodimlarReducer from "./reducers/xodimlarReducer";
import darajaReducer from "./reducers/darajaReducer";
import lavozimReducer from "./reducers/lavozimReducer";

export const store = createStore(combineReducers({
    xodimlarReducer,
    darajaReducer,
    lavozimReducer
}), applyMiddleware(logger))
