import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {displayEmployee} from './store/actions/displayActions'

class EmployeeInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        const data = this.props.id;
       this.props.displayEmployee(data)
       
    }
    
    render() {
        const { employee } = this.props;
        //console.log(employee);
        const data = this.props.id;

    
        return (
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created">{employee.first_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Other Name</h6> </div>
                        <div className="created">{ employee.other_name}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Last Name</h6></div>
                        <div className="created">{employee.last_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Email</h6></div>
                        <div className="created">{ employee.email}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Gender</h6></div>
                        <div className="created">{ employee.gender}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Date of Birth</h6></div>
                    <div className="created">{employee.date_of_birth}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Region</h6></div>
                        <div className="created">{employee.region_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>State</h6></div>
                        <div className="created">{employee.state}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Address</h6></div>
                        <div className="created">{ employee.address}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{ employee.phone_number}</div>
                    </div>
                    <hr />
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editEmployee/${data}`}>Edit</Link></button>
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
        employee: state.employee.display
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayEmployee: (employee) => {
            dispatch(displayEmployee(employee));
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeInfo);