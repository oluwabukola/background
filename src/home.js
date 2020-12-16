import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

class Home extends React.Component{
    render() {
       
        return (
            <div className="home-page">
                <Nav/>
            <div className="graph">
               
                    <div className="address"></div>
                    <div className="guarantor"></div>
                    <div className="referee"></div>
                    <div className="result"></div>
                    <div className="pev-employer"></div>
                </div>
                </div>
                
                
            
                
        )
    }
}
export default Home;