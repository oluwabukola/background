
const initState = {
    loading: false,
    result: [],
    oneresult: [],
    editemployer:[],
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
              case 'DISPLAY_RESULT':
            console.log('display eresult', action.payload);
            return {
                ...state,
                oneresult: payload.data
            };
            case 'EDIT_RESULT':
                console.log('edit employer', action.payload);
                return {
                    ...state,
                    editemployer: payload.data
                };
            
        default:
            return state;
        
    }
    
}
  
  
export default resultReducer;