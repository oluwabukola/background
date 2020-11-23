
const initState = {
    oneguarantor:[],
    guarantor: [],
    guarantors: [],
    error: null,
    editguarator:[]
    
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
            case 'GET_GUARANTORS':
                console.log('get guarantors', action.payload);
                return {
                    ...state,
                    guarantors: payload.data
                };
            
            case 'EDIT_GUARANTOR':
                console.log('edit guarantor', action.payload);
                return {
                    ...state,
                    editguarantor: payload.data
            };
        
 
        
        default:
            return state;
        
    }
    
}
  
  
export default guarantorReducer;