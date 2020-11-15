import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {displayGuarantor} from './store/actions/displayActions'

class GuarantorInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        const data = this.props.id;
        console.log(data);
       this.props.displayGuarantor(data)
       
    }
    
    render() {
        const { employee } = this.props;
        console.log(employee);
    
        return (
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created"><h6>{ employee.first_name}</h6></div>
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
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Address</h6> </div>
                        <div className="created">{ employee.address}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{ employee.phone_number}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Relationship</h6></div>
                    <div className="created">{employee.relationship}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Occupation</h6></div>
                        <div className="created">{employee.occupation}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Business Name</h6></div>
                        <div className="created">{employee.business_name}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Office Address</h6></div>
                        <div className="created">{ employee.office_address}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Business Email</h6></div>
                        <div className="created">{ employee.business_email}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Office Phone</h6></div>
                        <div className="created">{ employee.phone}</div>
                    </div>
                    <hr />
                    
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
        employee: state.employee.guarantor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayGuarantor: (guarantor) => {
            dispatch(displayGuarantor(guarantor));
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GuarantorInfo);