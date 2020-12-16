
const initState = {
    result: [],
    oneresult: [],
    results: [],
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
                result: payload.data
            };
              case 'DISPLAY_RESULT':
            console.log('display result', action.payload);
            return {
                ...state,
                oneresult:  payload.data
            };
            case 'GET_RESULTS':
                console.log('get  results', action.payload);
                return {
                    ...state,
                    results: payload.data === undefined ? [] :  payload.data
                };
            case 'EDIT_RESULT':
                console.log('edit employer', action.payload);
                return {
                    ...state,
                    editemployer: payload.data
            };
            case 'DELETE_RESULT':
                console.log('delete result', action.payload);
                return {
                    ...state,
                    results: state.results.filter(item => item.id !== action.payload)
                };

            
        default:
            return state;
        
    }
    
}
  
  
export default resultReducer;