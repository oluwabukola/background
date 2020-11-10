const initState = {
    
    employee: [],
}

const employeeReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'ADD_EMPLOYEE':
            // state.createdEmployee.push(createdEmployee);
            console.log('created employee', action.payload);
            // console.log(state);
            // console.log(action);
            return {
                ...state,
                employee: payload.data
            }
        
        default:
            return state;
        
    }
    
}

export default employeeReducer;