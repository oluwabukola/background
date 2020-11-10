import React from 'react';
import { Link } from 'react-router-dom';
class Verify extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.history.push('/Employee');
        console.log('clicked');
    }
    render() {
        return (
            <div className="home-page">
                <div className="nav">
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
                    </ul>
                </div>
                <div className="rest">
                    <div className="verify-tag">
                    <h2>firstname lastname</h2>
                    <h2>Verification Page</h2>
                        </div>
                <div className="verify-table">
                <table >
                <thead>
                            <tr>
                            <th>S/N</th>
                            <th>Result</th>
                            <th>Address</th>
                            <th>Referee</th>
                            <th>Guarantor</th>
                            <th>Prev employer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><input type="checkbox"></input></td>
                                <td><input type="checkbox"></input></td>
                                <td><input type="checkbox"></input></td>
                                <td><input type="checkbox"></input></td>
                                <td><input type="checkbox"></input></td>
                            </tr>
                            </tbody>
                    </table>
                    <button type="button" className="update" onClick={this.handleClick}>Done</button>
                    </div>
                </div>
                </div>
        )
    }
}
export default Verify;