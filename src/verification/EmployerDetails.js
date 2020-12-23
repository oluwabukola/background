import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onePreviousEmployer } from '../store/actions/verificationAction';
import Nav from '../Nav';

class EmployerDetails extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = this.props.match.params.id;
      //  console.log( 'info state', data);
        this.props.onePreviousEmployer(data)
       
    }
    
    render() {
        const { employer} = this.props;
       // console.log( 'employedddd', employer);
        const data = this.props.match.params.id;

        return (
            <div className="home-page">
            <Nav />
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Employer Name</h6> </div>
                        <div className="created"><h6>{employer!==null && employer.employer_name}</h6></div>
                    </div>
                    <hr/>
                     <div className="content">
                        <div className="created"><h6>Start Month</h6></div>
                        <div className="created">{employer.startmonth}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Start Year</h6></div>
                        <div className="created">{ employer.startyear}</div>
                    </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Job Title</h6></div>
                        <div className="created">{employer.jobtitle}</div>
                        </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Monthly Salary(#)</h6></div>
                        <div className="created">{employer.monthly_salary}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>End Month</h6></div>
                        <div className="created">{employer.endmonth}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>End Year </h6> </div>
                        <div className="created">{ employer.endyear}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Level</h6></div>
                        <div className="created">{ employer.joblevel_id}</div>
                    </div>
                    <hr />
                    
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editGuarantor/${data}`}>Edit</Link></button>
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
    console.log('previous employer info', state.verification.oneEmployer);
    return {
        employer: state.verification.oneEmployer,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        onePreviousEmployer: (employer) => dispatch(onePreviousEmployer(employer)),
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerDetails);