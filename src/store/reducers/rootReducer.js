import guarantorReducer from './guarantorReducer';
import employeeReducer from './employeeReducer';
import { combineReducers } from 'redux';
import regionReducer from './regionReducer';

const Reducer = combineReducers({
    guarantor: guarantorReducer,
    employee: employeeReducer,
    region: regionReducer,
});
const rootReducer = (state, action) => {
    return Reducer(state, action)
}
export default rootReducer;