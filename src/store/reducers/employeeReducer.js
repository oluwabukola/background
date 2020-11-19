const initState = {
    
    employee: [],
    display: [],
    result: [],
    editemployee: [],
    guarantors: [],
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
        
       
      
        
        case 'EDIT_EMPLOYEE':
            console.log('edit employee', action.payload);
            return {
                ...state,
                editemployee: payload.data
            };
            case 'GET_GUARANTORS':
                console.log('get guarantors', action.payload);
                return {
                    ...state,
                    guarantors: payload.data
                };
            
        
        default:
            return state;
        
    }
    
}

export default employeeReducer;