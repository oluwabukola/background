import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render() {
       
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