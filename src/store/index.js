
import { createStore } from 'redux';
import reducers from '../reducers';

const storeRedux = createStore(reducers);

export default storeRedux;
