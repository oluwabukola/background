export const displayEmployee = (employee) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/employee/${employee}`, {
            method: 'GET',
        headers: {
            'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
            
        })
            .then(response => {
              return  response.json();
                
            })
            .then(data => {
                console.log(data);
                dispatch({type: 'DISPLAY_EMPLOYEE', payload: data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
        
        
    }
}

export const displayGuarantor = (guarantor) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/guarantor/${guarantor}`, {
            method: 'GET',
        headers: {
            'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
            
        })
            .then(response => {
              return  response.json();
                
            })
            .then(data => {
                console.log(data);
                dispatch({type: 'DISPLAY_GUARANTOR', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
        
        
    }
}

export const displayEmployer = (employer) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/previous_employee/${employer}`, {
            method: 'GET',
        headers: {
            'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
            
        })
            .then(response => {
              return  response.json();
                
            })
            .then(data => {
                console.log(data);
                dispatch({type: 'DISPLAY_EMPLOYER', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    }
}


export const displayResult = (result) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/employee_result/${result}`, {
            method: 'GET',
        headers: {
            'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
            
        })
            .then(response => {
              return  response.json();
                
            })
            .then(data => {
                console.log(data);
                dispatch({type: 'DISPLAY_RESULT', payload:data})
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    }
}

export const editEmployee = (employee) => {
    const token = localStorage.getItem('token');
    console.log('inside action', employee)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/employee/${employee.employee_id}`, {
        
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(employee),
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
