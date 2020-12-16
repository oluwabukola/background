
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
                    guarantors: payload.data === undefined ? [] :  payload.data
                };
            
            case 'EDIT_GUARANTOR':
                console.log('edit guarantor', action.payload);
                return {
                    ...state,
                    editguarantor: payload.data
            };
            case 'DELETE_GUARANTOR':
                console.log('deleteeguarantor', action.payload);
                return {
                    ...state,
                    guarantors: state.guarantors.filter(item => item.id !== action.payload)
                };
        
        default:
            return state;
        
    }
    
}
  
  
export default guarantorReducer;