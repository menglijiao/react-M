import { createStore } from 'redux';
import reducers from './reduce';
const store = createStore(reducers);
export default store