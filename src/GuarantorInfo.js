import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayGuarantor } from './store/actions/displayActions';
import { getGuarantors } from './store/actions/displayActions';

class GuarantorInfo extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = this.props.match.params.id;
        console.log( 'info state', data);
        this.props.displayGuarantor(data)
       
    }
    
    render() {
        
        const { guarantor} = this.props;
        console.log(guarantor);
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
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created"><h6>{guarantor!==null && guarantor.first_name}</h6></div>
                    </div>
                    <hr/>
                     <div className="content">
                        <div className="created"><h6>Last Name</h6></div>
                        <div className="created">{guarantor.last_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Email</h6></div>
                        <div className="created">{ guarantor.email}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Gender</h6></div>
                        <div className="created">{guarantor.gender}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Address</h6> </div>
                        <div className="created">{ guarantor.address}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{ guarantor.phone_number}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Relationship</h6></div>
                    <div className="created">{guarantor.relationship}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Occupation</h6></div>
                        <div className="created">{guarantor.occupation}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Business Name</h6></div>
                        <div className="created">{guarantor.business_name}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Office Address</h6></div>
                        <div className="created">{ guarantor.office_address}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Business Email</h6></div>
                        <div className="created">{guarantor.business_email}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Office Phone</h6></div>
                        <div className="created">{ guarantor.phone}</div>
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
    console.log('guarantor ibfo', state.guarantor.oneguarantor);
    return {
        guarantor: state.guarantor.oneguarantor,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        displayGuarantor: (guarantor) => dispatch(displayGuarantor(guarantor))
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GuarantorInfo);