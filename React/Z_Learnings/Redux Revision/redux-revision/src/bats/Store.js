import {createStore} from 'redux';
import batReducer from './Redux/batReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(batReducer , composeWithDevTools());
export default store;
