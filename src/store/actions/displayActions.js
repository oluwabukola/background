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
        const response = fetch(`http://hotelanywhere.ng/background/api/guarantor/${guarantor}`,{
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
                console.log('displaying guarantor', data);
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

export const getGuarantors = (guarantors) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/employee_guarantors/${guarantors}`, {
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
                console.log('guar', guarantors);
                dispatch({type: 'GET_GUARANTORS', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    }
}

export const getEmployers = (employers) => {
    const token = localStorage.getItem('token');
    
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/previous_employer/${employers}`, {
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
                console.log('employers', employers);
                dispatch({type: 'GET_EMPLOYERS', payload:data})
               
            })
            .catch((error) => {
                console.error('Error:', error);
              });
    }
}

export const editEmployer = (employer) => {
    const token = localStorage.getItem('token');
    console.log('inside action', employer)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/previous_employee/${employer.id}`, {
        
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                    
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

export const editResult = (result) => {
    const token = localStorage.getItem('token');
    console.log('inside action', result)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/employee_result/${result.id}`, {
        
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                    
            },
            body: JSON.stringify(result),
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
export const editGuarantor= (guarantor) => {
    const token = localStorage.getItem('token');
    console.log('inside action', guarantor)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/guarantor/${guarantor.id}`, {
        
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                    
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



