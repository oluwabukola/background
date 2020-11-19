import guarantorReducer from './guarantorReducer';
import employeeReducer from './employeeReducer';
import { combineReducers } from 'redux';
import regionReducer from './regionReducer';
import resultReducer from './resultReducer';
import employerReducer from './employerReducer';

const Reducer = combineReducers({
    guarantor: guarantorReducer,
    employee: employeeReducer,
    region: regionReducer,
    result: resultReducer,
    employer: employerReducer
});
const rootReducer = (state, action) => {
    return Reducer(state, action)
}
export default rootReducer;