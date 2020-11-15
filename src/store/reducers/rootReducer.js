import guarantorReducer from './guarantorReducer';
import employeeReducer from './employeeReducer';
import { combineReducers } from 'redux';
import regionReducer from './regionReducer';
import resultReducer from './resultReducer';

const Reducer = combineReducers({
    guarantor: guarantorReducer,
    employee: employeeReducer,
    region: regionReducer,
    result: resultReducer
});
const rootReducer = (state, action) => {
    return Reducer(state, action)
}
export default rootReducer;