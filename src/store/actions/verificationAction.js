
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import Modal from 'react-bootstrap/Modal';
import 'toasted-notes/src/styles.css';


const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`


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
                // console.error('Error:', error);
            });
}
             
}

// export const UpdateGuarantors = (guarantors) => {
//     // alert(JSON.stringify(guarantors));
//     return (dispatch, getState) => {
//         dispatch({
//             type: 'DISPLAY_GUARANTORS',
//             payload: guarantors
//         } )
//     };
// }
export const Guarantors = (guarantors) => {
    alert(guarantors);
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
             // console.log('displaying guarantors', data);
            dispatch({ type: 'DISPLAY_GUARANTORS', payload: data })
             })
            .catch((error) => {
                // console.error('Error:', error);
            });
}
             
}

export const PreviousEmployers = (prevEmployers) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeespreviousemployer/${prevEmployers}`, {
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
                // console.log('displaying previous employers', data);
                dispatch({ type: 'DISPLAY_PREVEMPLOYERS', payload: data })
            })
            .catch((error) => {
                // console.error('Error:', error);
            });
}
             
}

export const displayReferees = (referees) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getemployeereferee/${referees}`, {
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
                // console.log('displaying candidate referees', data);
                dispatch({ type: 'DISPLAY_REFEREES', payload: data })
            })
            .catch((error) => {
                // console.error('Error:', error);
            });
}
             
}

export const verifyGuarantor = (guarantor) => {
    const token = localStorage.getItem('token');
    //console.log('inside action', guarantor)
    return (dispatch, getState) => {
       // alert(guarantor.id)
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateguarantor/${guarantor.id}`, {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                'Accept':  'application/json',
                    
            },
            body: JSON.stringify(guarantor),
           
        })
             .then(response =>  response.json())
             . then(response => {
                
               // console.log('Success:', response.data);
               // console.log('beforeeeee', getState().verification.guarantors);
            
                 let guarantorss = getState().verification.guarantors;
              
                 const index = guarantorss.findIndex(guarantors=> guarantors.guarantor_id == guarantor.id);
                 guarantorss[index] = response.data;
                // console.log('torsss', guarantorss);
                 let data = {
                     data: guarantorss
                 }
                  dispatch({ type: 'DISPLAY_GUARANTORS', payload: data })
                //UpdateGuarantors(getState().verification.guarantors[0].data)
             // console.log('update', update);
                //console.log('afterrrrrr', guarantorss);
            
            })

            .catch(e => {
                console.log('error', e)
                return {
                    success: false,
                    data: []
                }
            })
               
    }
}


export const verifyEmployer = (employer) => {
    const token = localStorage.getItem('token');
    console.log('inside action', employer)
    return (dispatch, getState) => {
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateemployeespreviousemployer/${employer.id}`, {
        
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


export const verifyReferee = (referee) => {
    const token = localStorage.getItem('token');
    console.log('inside action', referee)
    return (dispatch, getState) => {
       
        return  fetch(`http://hotelanywhere.ng/background/api/updateemployeesreferee/${referee.id}`, {
        
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type':  'application/json',
                    
            },
            body: JSON.stringify(referee),
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


export const oneGuarantor = (guarantor) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeeguarantor/${guarantor}`, {
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
                dispatch({ type: 'GET_GUARANTOR', payload: data })
            })
            .catch((error) => {
                // console.error('Error:', error);
            });
}
             
}

export const onePreviousEmployer = (employer) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getallemployeepreviousemployer/${employer}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'GET_EMPLOYER', payload: data })
            })
            .catch((error) => {
                // console.error('Error:', error);
            });
}
             
}

export const oneReferee = (referee) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getemployeerefereee/${referee}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'GET_REFEREE', payload: data })
            })
            .catch((error) => {
                // console.error('Error:', error);
            });
}
             
}
export const oneEmployee= (employee) => {
    const token = localStorage.getItem('token');
    return (dispatch, getState) => {
        const response = fetch(`http://hotelanywhere.ng/background/api/getemployee/${employee}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':  'application/json',
            }
        })
            .then(response => {
                return response.json();
                    
            })
            .then(data => {
                dispatch({ type: 'GET_EMPLOYEE', payload: data })
            })
            .catch((error) => {
                // console.error('Error:', error);
            });
}
             
}




