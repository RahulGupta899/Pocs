import batReducer from "./Reducers/batReducer";
import ballReducer from "./Reducers/ballReducer";
import userReducer from "./Reducers/userReducer";

import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    Ball: ballReducer,
    Bat: batReducer,
    Users: userReducer
})
export default rootReducers;