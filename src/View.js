import React from 'react';
// import { TabContainer }from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EmployeeInfo from './EmployeeInfo';
import GuarantorInfo from './GuarantorInfo';
import EmployerInfo from './EmployerInfo';
import ResultInfo from './ResultInfo';



class View extends React.Component{
    render() {
        const params = this.props.match.params;
        console.log(params.id);
        
        return (
            <div className="home-page">
                <div className="navi">
                    <ul>
                        <li><Link to='/home'><i className="fas fa-columns"></i>Home</Link></li>
                      
                        <li><Link to='/regions'><i className="fas fa-compass regn"></i>Regions</Link>
                            <div className="sub-region">
                            <ul >
                                <li><button type="button">Edit Region</button></li>
                                    <li> <Link to='/addregion'><button type="button">Add Region<i className="fas fa-plus"></i></button></Link></li>
                                </ul>
                                </div>
                        </li>
                        <li><Link to='/createEmployee'><i className="fas fa-compass regn"></i>Create Employee</Link> </li>
                                    <li><i class="fas fa-sign-out-alt">Signout</i></li>
                    </ul>
                </div>
                <div className="rest">
                    
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="Basic Information" title="Employee">
                 <EmployeeInfo id={`${params.id}`} /> 
                        </Tab>
                 <Tab eventKey="Guarantor" title="Guarantor">
                  <GuarantorInfo id={`${params.id}`} /> 
                 </Tab>
                <Tab eventKey="Previous Employer" title="Previous Employer">
                 <EmployerInfo  id={`${params.id}`} /> 
                    </Tab>
                 <Tab eventKey="Result" title="Result" >
                  <ResultInfo  id={`${params.id}`} /> 
                    </Tab>
                    </Tabs>
                    </div>
                    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee.employee
    }
}

export default connect(mapStateToProps)(View);
