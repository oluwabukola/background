import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import { displayCandidate } from '../store/actions/verificationAction';


class Verification extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.displayCandidate();
      }
 
    render() {
        const { candidate} = this.props;
        return (
            <div className="home-page">
                <Nav />
                <div className="rest">
                    <h3>Employees</h3>
                <table>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>View</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                candidate != null && candidate.map((employ) =>
                           
                                    <tr>
                                        <td>{employ.first_name}</td>
                                        <td>{ employ.last_name}</td>
                                        <td>{ employ.email}</td>
                                        <td className="eyes"><i class="far fa-eye eye"></i></td>
                                        <td ><button className="verification-action" ><Link to={`/verify/${employ.employee_id}`}>Action</Link></button></td>
                                        {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                    </tr>
                                )}
                                
                                
                            
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('displaying referees', state.verification.candidate);
    return {
        candidate: state.verification.candidate,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        displayCandidate: (candidate) => dispatch(displayCandidate(candidate))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification);

