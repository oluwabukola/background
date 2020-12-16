export const displayCandidate = (candidate) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch('http://hotelanywhere.ng/background/api/getallcandidatestobeverified', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                console.log('displaying candidate', data);
                dispatch({ type: 'DISPLAY_CANDIDATES', payload: data })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}
             
}

export const Guarantors = (guarantors) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeesguarantor/${guarantors}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                console.log('displaying guarantors', data);
                dispatch({ type: 'DISPLAY_GUARANTORS', payload: data })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
}
             
}