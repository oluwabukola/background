const initState = {
    create: [],
    employee: [],
    display: [],
    result: [],
    editemployee: [],
    guarantors: [],
    deleteemployee:[],
}

const employeeReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'ADD_EMPLOYEE':
            console.log('create employee', action.payload);
          
            return {
                ...state,
            create: payload.data
            };
        case 'ADDED_EMPLOYEE':
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
    
        case 'EDIT_EMPLOYEE':
            console.log('edit employee', action.payload);
            return {
                ...state,
                editemployee: payload.data
            };
            case 'DELETE_EMPLOYEE':
                console.log('deleteemployee', action.payload);
                return {
                    ...state,
                    employee: state.employee.filter(item => item.id !== action.payload)
                };
            
        
        default:
            return state;
        
    }
    
}

export default employeeReducer;