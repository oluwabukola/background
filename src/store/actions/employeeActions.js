
export const createEmployee = (employee) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/employee', {
            method: 'GET',
        headers: {
            'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
              return  response.json();
                
            })
            .then(data => {
                console.log(data);
                dispatch({type: 'ADD_EMPLOYEE', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
        
        
    }
}

export const createGuarantor = (guarantor) => {
    const token = localStorage.getItem('token');
    console.log('inside action',guarantor)
    return (dispatch, getState) => {
       
        return fetch('http://hotelanywhere.ng/background/api/guarantor', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                    
            },
            body: JSON.stringify(guarantor),
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                //dispatch({ type: 'ADD_GUARANTOR_STARTED', payload: true })
                    
                    
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const createRegion= (region) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/region', {
            method: 'POST',
        headers: {
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json',
            },
            
        })
            .then(response => {
                console.log('response region', response);
                return response.json();
                
            })
            .then(data => {
                console.log(data);
                dispatch({type: 'ADD_REGION', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    }
}
