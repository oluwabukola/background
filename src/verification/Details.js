import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import Results from '../Results';
import GuarantorDetails from './GuarantorDetails';
import EmployerDetails from './EmployerDetails';
import RefereeDetails from './RefereeDetails';



class Details extends React.Component{
    componentDidMount() {
        const params = this.props.match.params.id;
    }
    
    render() {
        const params = this.props.match.params;
        return (
            <div className="home-page">
        <Nav />
                <div className="rest">
                <Tabs defaultActiveKey="Guarantor" id={`${params.id}`} >
                    <Tab eventKey="Guarantor" title="Guarantor">
                  <GuarantorDetails id ={`${params.id}`} /> 
                 </Tab>
                 <Tab eventKey="Previous Employer" title="Previous Employer">
                 <EmployerDetails id ={`${params.id}`} /> 
                        </Tab>
                   <Tab eventKey="Referee" title="Referee">
                 <RefereeDetails id ={`${params.id}`} /> 
                    </Tab>
               {/*  <Tab eventKey="Result" title="Result" >
                  <Results  /> 
                        </Tab>
                <Tab eventKey="Address" title="Address" >
                  <Address  /> 
                   </Tab> */}
                    </Tabs>
                    {/*<button type="button" className="update" >Done</button>*/}
        
                </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return {
        candidate: state.verification.candidate,
    }
}
export default connect(mapStateToProps)(Details);