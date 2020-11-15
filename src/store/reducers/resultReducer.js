
const initState = {
    loading: false,
    result: [],
    error: null
  };


const resultReducer = (state = initState, action) => {
    
    
     const{type, payload} = action
    switch (type) {
        
        case 'ADD_RESULT':
           
            console.log('result created', action.payload);
           
            return {
                ...state,
                loading: false,
                 error: null,
                result: payload.data
            };
            
        default:
            return state;
        
    }
    
}
  
  
export default resultReducer;