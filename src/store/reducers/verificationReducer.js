const initState = {
    candidate: [],
    guarantors:[],
    prevEmployers: [],
    referees: [],
    verifyGuarantor: [],
    verifyEmployer: [],
    verifyReferee: [],
    oneGuarantor: [],
    oneEmployer: [],
    oneReferee: [],
    oneEmployee:[],
}
const verificationReducer = (state = initState, action) => {
    
     const{type, payload} = action
    switch (type) {
        
        case 'DISPLAY_CANDIDATES':
            console.log('actionsssssss', payload);
            return {
                ...state,
            candidate: payload.data
            };
        
            case 'DISPLAY_GUARANTORS':
            alert(JSON.stringify(payload));
                return {
                    ...state,
                guarantors: payload.data
            };
        
            case 'DISPLAY_PREVEMPLOYERS':
              
                return {
                    ...state,
                prevEmployers: payload.data
                };
                case 'DISPLAY_REFEREES':
              
                    return {
                        ...state,
                    referees: payload.data
            };
        
            case 'VERIFY_GUARANTOR':
               // console.log('verify guarantor', action.payload);
              
                return {
                    ...state,
                verifyGuarantor: payload.data
            };
            case 'VERIFY_EMPLOYER':
                console.log('verify previous employer', action.payload);
              
                return {
                    ...state,
                    verifyEmployer: payload.data
            }; 
            case 'VERIFY_REFEREE':
                console.log('verify referee', action.payload);
              
                return {
                    ...state,
                    verifyReferee: payload.data
            }; 
            case 'GET_GUARANTOR':
               // console.log('get one guarantor', action.payload);
              
                return {
                    ...state,
                    oneGuarantor: payload.data
            }; 
            case 'GET_EMPLOYER':
                // console.log('get one employer', action.payload);
               
                 return {
                     ...state,
                     oneEmployer: payload.data
            }; 
            case 'GET_REFEREE':
                // console.log('get one referee', action.payload);
               
                 return {
                     ...state,
                     oneReferee: payload.data
            };
            case 'GET_EMPLOYEE':
                // console.log('get one referee', action.payload);
               
                 return {
                     ...state,
                     oneEmployee: payload.data
                 };
        default:
            return state;
        
    }
    
}

export default verificationReducer;