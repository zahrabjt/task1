import { combineReducers } from "redux";
import productReducer from "./productreducer";

export default combineReducers({
  productState: productReducer,
});
