const initState = {
    region: [],
    regionName: [],
    editedRegion: [],
    oneregion:[],
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
            case 'GET_REGION':
                console.log('one region', action.payload);
                return {
                    ...state,
                    oneregion: payload.data
            };
        
            case 'EDIT_REGION':
           
                console.log('region edited', action.payload);
                console.log(action);
                return {
                    ...state,
                    editedRegion: payload.data
            };
            case 'DELETE_REGION':
                console.log('delete region', action.payload);
                return {
                    ...state,
                    regionName: state.regionName.filter(item => item.id !== action.payload)
                };
        default:
            return state;
    }
}

export default regionReducer;