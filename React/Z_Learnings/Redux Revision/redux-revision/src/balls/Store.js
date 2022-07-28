import {createStore} from 'redux';
import ballReducer from './Redux/ballReducer';
const store = createStore(ballReducer);
export default store;