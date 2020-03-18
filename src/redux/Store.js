import { createStore } from 'redux';
import counter from './Counter';

var store = createStore(counter);
export default store;