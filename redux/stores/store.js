/* eslint-disable */
import { createStore, combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer";
import foodReducer from '../reducers/foodReducer';

const rootReducer = combineReducers({
  counterOperation: counterReducer,
  foodReducer: foodReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;