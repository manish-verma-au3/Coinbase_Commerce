import { combineReducers } from "redux";
import balanceReducer from './balanceReducer';

let allReducer = combineReducers({
     balanceReducer : balanceReducer
    
  });
  
  export default allReducer;