
const initState = {
    loading: false,
    employer: [],
    error: null
  };


const employerReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {

        case 'ADD_EMPLOYER':
           
            console.log('employer created', action.payload);
           
            return {
                ...state,
                loading: false,
                 error: null,
                employer: payload.data
            };
            
        default:
            return state;
        
    }
    
}
  
  
export default employerReducer;