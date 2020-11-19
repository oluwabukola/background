const initState = {
    
    region: [],
    regionName: [],
    editedRegion: [],
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

            console.log(action);
            return {
                ...state,
                regionName: payload.data
            };
            case 'EDIT_REGION':
           
                console.log('region edited', action.payload);
                console.log(action);
                return {
                    ...state,
                    editedRegion: payload.data
                };
        
        default:
            return state;
        
    }
    
}

export default regionReducer;