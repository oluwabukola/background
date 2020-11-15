

const initState = {
    loading: false,
    guarantor: [],
    error: null
  };


const guarantorReducer = (state = initState, action) => {
    
    
     const{type, payload} = action
    switch (type) {

            // case 'ADD_GUARANTOR_STARTED':
            //   return {
            //     ...state,
            //     loading: true
            // };
        
        case 'ADD_GUARANTOR':
           
            console.log('guarantor created', action.payload);
           
            return {
                ...state,
                loading: false,
                 error: null,
                guarantor: payload.data
            };
            // case 'ADD_GUARANTOR_FAILURE':
            //     return {
            //       ...state,
            //       loading: false,
            //       error: action.payload.error
            //     };
        
        default:
            return state;
        
    }
    
}
  
  
export default guarantorReducer;