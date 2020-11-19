import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {displayEmployer} from './store/actions/displayActions'

class EmployerInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        const data = this.props.match.params.id;
        console.log( 'employer state', data);
     this.props.displayEmployer(data) 
    }
    
    render() {
        const { employer } = this.props;
         console.log('employer info', employer);
        const data = this.props.match.params.id;
     
        return (
            <div className="home-page">
                <div className="navi">
                    <ul>
                        <li><Link to='/home'><i className="fas fa-columns"></i>Home</Link></li>
                        <li><Link to='/regions'><i className="fas fa-compass"></i>Regions</Link> </li>
                        <li><Link to='/createEmployee'><i className="fas fa-compass regn"></i>Create Employee</Link> </li>
                        <li><i class="fas fa-sign-out-alt">Signout</i></li>
                    </ul>
                </div>
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Company Name</h6> </div>
                        <div className="created"><h6>{ employer.company_name}</h6></div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Email</h6> </div>
                        <div className="created">{ employer.email}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{employer.phone_number}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Address</h6></div>
                        <div className="created">{ employer.address}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Position</h6></div>
                        <div className="created">{ employer.position}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Issue</h6></div>
                    <div className="created">{employer.issue}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Reason Leaving</h6></div>
                        <div className="created">{employer.reason_leaving}</div>
                    </div>
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editEmployer/${data}`}>Edit</Link></button>
                            <button type="button"> Verified</button>
                      </div>
                    </div>
                    </div>
                    </div>    
                </div>
                
        );
    }
}
const mapStateToProps = (state) => {
    console.log('one employer', state.employer.oneemployer);
    return {
        employer: state.employer.oneemployer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayEmployer: (employer) => dispatch(displayEmployer(employer))
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerInfo);