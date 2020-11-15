const initState = {
    
    employee: [],
    display: [],
    guarantor: [],
    employerr: [],
    result: [],
    editemployee: [],
}

const employeeReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'ADD_EMPLOYEE':
            console.log('created employee', action.payload);
          
            return {
                ...state,
                employee: payload.data
            };
            case 'DISPLAY_EMPLOYEE':
                console.log('display employee', action.payload);
                return {
                    ...state,
                    display: payload.data
            };
        case 'DISPLAY_GUARANTOR':
            console.log('display guarantor', action.payload);
            return {
                ...state,
                guarantor: payload.data
            };
        case 'DISPLAY_EMPLOYER':
            console.log('display employer', action.payload);
          
            return {
                ...state,
                employerr: payload.data
            };
        case 'DISPLAY_RESULT':
            console.log('display eresult', action.payload);
            return {
                ...state,
                result: payload.data
            };
        
        case 'EDIT_EMPLOYEE':
            console.log('edit employee', action.payload);
            return {
                ...state,
                editemployee: payload.data
            };
        
        default:
            return state;
        
    }
    
}

export default employeeReducer;