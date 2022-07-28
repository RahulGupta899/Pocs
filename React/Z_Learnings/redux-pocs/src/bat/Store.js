import {createStore} from 'redux';
import batReducer from './Redux/batReducer';

const store = createStore(batReducer);
export default store;