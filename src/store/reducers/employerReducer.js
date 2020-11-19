
const initState = {
    employer: [],
    employers: [],
    oneemployer: [],
    editemployer: [],
    error: null
  };


const employerReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {

        case 'ADD_EMPLOYER':
           
            console.log('employer created', action.payload);
           
            return {
                ...state,
                 error: null,
                employer: payload.data
            };
            case 'GET_EMPLOYERS':
           
            console.log('employer retrieved', action.payload);
           
            return {
                ...state,
                
                employers: payload.data
            };
             case 'DISPLAY_EMPLOYER':
            console.log('display employer', action.payload);
          
            return {
                ...state,
                oneemployer: payload.data
            };
            case 'EDIT_EMPLOYER':
                console.log('edit employer', action.payload);
                return {
                    ...state,
                    editemployer: payload.data
                };
            
        default:
            return state;
        
    }
    
}
  
  
export default employerReducer;