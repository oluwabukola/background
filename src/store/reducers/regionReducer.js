const initState = {
    
    regionName: [],
}

const regionReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        case 'ADD_REGION':
           
            console.log('created region', action.payload);
            //console.log(state);
            console.log(action);
            return {
                ...state,
                employee: payload.region.data
            }
        
        default:
            return state;
        
    }
    
}

export default regionReducer;