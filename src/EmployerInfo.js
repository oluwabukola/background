import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {displayEmployer} from './store/actions/displayActions'

class EmployerInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        const data = this.props.id;
        console.log(data);
       this.props.displayEmployer(data)
       
    }
    
    render() {
        const { employee } = this.props;
        console.log(employee);
    
        return (
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Company Name</h6> </div>
                        <div className="created"><h6>{ employee.company_name}</h6></div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Email</h6> </div>
                        <div className="created">{ employee.email}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{employee.phone_number}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Address</h6></div>
                        <div className="created">{ employee.address}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Position</h6></div>
                        <div className="created">{ employee.position}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Issue</h6></div>
                    <div className="created">{employee.issue}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Reason Leaving</h6></div>
                        <div className="created">{employee.reason_leaving}</div>
                    </div>
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> Edit</button>
                            <button type="button"> Verified</button>
                      </div>
                    </div>

                </div>
                
                       
                          
                </div>
                
        );
    }
}
const mapStateToProps = (state) => {
    return {
        employee: state.employee.employerr
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayEmployer: (employer) => {
            dispatch(displayEmployer(employer));
        } 
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerInfo);