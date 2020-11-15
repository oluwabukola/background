
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
       
        return  fetch('http://hotelanywhere.ng/background/api/guarantor', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(guarantor),
        })
            .then(response => {
                console.log('resposne', response)
                return response.json(); 
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const createEmployer = (employer) => {
    const token = localStorage.getItem('token');
    console.log('inside action', employer)
    return (dispatch, getState) => {
       
        return  fetch('http://hotelanywhere.ng/background/api/previous_employee', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(employer),
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                       
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
    console.log('inside action', region)
    return (dispatch, getState) => {
       
        return fetch('http://hotelanywhere.ng/background/api/region', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(region),
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                    
            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}


export const createResult = (result) => {
    const token = localStorage.getItem('token');
    console.log('inside action', result)
    return (dispatch, getState) => {
       
        return fetch('http://hotelanywhere.ng/background/api/employee_result', {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(result),
        }).then(response => {
                console.log('resposne', response)
                return response.json();

            }).catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })      
    }
}


export const displayRegion = (regionName) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/region', {
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
                dispatch({type: 'DISPLAY_REGION', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
        
        
    }
}

