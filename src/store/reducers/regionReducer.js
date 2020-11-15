const initState = {
    
    region: [],
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
                region: payload.region.data
            };
        
        case 'DISPLAY_REGION':
           
            console.log('region displayed', action.payload);
            console.log(state);
            console.log(action);
            return {
                ...state,
                regionName: payload.data
            };
        
        default:
            return state;
        
    }
    
}

export default regionReducer;