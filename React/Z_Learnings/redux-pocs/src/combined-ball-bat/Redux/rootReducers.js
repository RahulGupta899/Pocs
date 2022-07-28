import { combineReducers } from "redux";
import ballReducer from './reducers/ballReducer';
import batReducer from './reducers/batReducer';
import userReducer from "./reducers/userReducer";

const rootReducers = combineReducers({
    Ball:   ballReducer,
    Bat:    batReducer,
    User:   userReducer
})
export default rootReducers;