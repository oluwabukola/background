const initState = {
    candidate: [],
    guarantors:[],
}
const verificationReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'DISPLAY_CANDIDATES':
            console.log('verify candidate', action.payload);
          
            return {
                ...state,
            candidate: payload.data
            };
            case 'DISPLAY_GUARANTORS':
              
                return {
                    ...state,
                guarantors: payload.data
                };
            
        
        default:
            return state;
        
    }
    
}

export default verificationReducer;