import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import Employers from '../Employers';
import Results from '../Results';
import VerifyGuarantors from './VerifyGuarantors'
import Address from './Address';


class Verify extends React.Component{
    componentDidMount() {
        const params = this.props.match.params.id;
        

    }
    
    render() {
        const params = this.props.match.params;
        return (
            <div className="home-page">
        <Nav />
                <div className="rest">
                <Tabs defaultActiveKey="Guarantors" id={`${params.id}`} >
                    <Tab eventKey="Guarantors" title="Guarantor">
                  <VerifyGuarantors id ={`${params.id}`} /> 
                 </Tab>
                <Tab eventKey="Previous Employer" title="Previous Employer">
                 <Employers  /> 
                    </Tab>
                 <Tab eventKey="Result" title="Result" >
                  <Results  /> 
                        </Tab>
                <Tab eventKey="Address" title="Address" >
                  <Address  /> 
                   </Tab>
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
export default connect(mapStateToProps)(Verify);