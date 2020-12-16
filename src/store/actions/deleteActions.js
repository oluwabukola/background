export const deleteEmployee = (id) => {
    const token = localStorage.getItem('token');
    console.log('inside action', id)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/employee/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            // body: JSON.stringify(employee),
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                    
            })
            .then(data => {
                console.log(data);
                dispatch({ type: 'DELETE_EMPLOYEE', payload:id })
                return data
            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const deleteGuarantor = (id) => {
    const token = localStorage.getItem('token');
    console.log('inside action', id)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/guarantor/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            // body: JSON.stringify(employee),
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                    
            })
            .then(data => {
                console.log(data);
                dispatch({ type: 'DELETE_GUARANTOR', payload:id })
                return data
            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}

export const deleteResult = (id) => {
    const token = localStorage.getItem('token');
    console.log('inside action', id)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/employee_result/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            // body: JSON.stringify(employee),
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                    
            })
            .then(data => {
                console.log(data);
                dispatch({ type: 'DELETE_RESULT', payload:id })
                return data
            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}


export const deleteEmployer = (id) => {
    const token = localStorage.getItem('token');
    console.log('inside action', id)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/previous_employee/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                    
            })
            .then(data => {
                console.log(data);
                dispatch({ type: 'DELETE_EMPLOYER', payload:id })
                return data
            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })         
    }
}

export const deleteRegion = (id) => {
    const token = localStorage.getItem('token');
    console.log('inside action', id)
    return (dispatch, getState) => {
       
        return fetch(`http://hotelanywhere.ng/background/api/region/${id}`, {
        
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
            },
        })
            .then(response => {
                console.log('resposne', response)
                return response.json();
                    
            })
            .then(data => {
                console.log(data);
                dispatch({ type: 'DELETE_REGION', payload:id })
                return data
            })
            .catch(e => {
                console.log(e)
                return {
                    success: false,
                    data: []
                }
            })         
    }
}

