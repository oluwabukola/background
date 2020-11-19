
const initState = {
    oneguarantor:[],
    guarantor: [],
    error: null,
    
  };


const guarantorReducer = (state = initState, action) => {
    
    
     const{type, payload} = action
    switch (type) {

        
        case 'ADD_GUARANTOR':
           
            console.log('guarantor created', action.payload);
           
            return {
                ...state,
                loading: false,
                 error: null,
                guarantor: payload.data
            };
            case 'DISPLAY_GUARANTOR':
                console.log('one guarantor', action.payload);
                return {
                    ...state,
                    oneguarantor: payload.data
                };
        
        default:
            return state;
        
    }
    
}
  
  
export default guarantorReducer;