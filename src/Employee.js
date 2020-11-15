import React from 'react';
import { Link } from 'react-router-dom';
class Employee extends React.Component{
    render() {
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
                    </ul>
                </div>
                <div className="rest">
                    <div className="region-name">
                    <h2>Osun Region</h2>
                    <button type="button"
                    className="back"
                    onClick={this.handleSubmit}>
                        <i class="fas fa-arrow-left"></i>Back</button>

                    </div>
                
                        <div className="search-container">
                            <input type="search" placeholder="search region"></input>
                            <div className="icon"><i class="fas fa-search"></i></div>
                        </div>
                 <table>
                        <thead>
                            <tr>
                            <th>S/N</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Location</th>
                            <th>Staff ID</th>
                            <th>Progress</th>
                            <th>Verify</th>
                            <th>Date updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Oluwabukola</td>
                                <td>Baiyewu</td>
                                <td>Osun</td>
                                 <td>rsc/2135674/tg</td>
                                <td><button type="button">progress</button></td>
                                <td><button type="button"><Link to='/verify'>verify</Link></button></td>
                                <td>1-03-2019</td>
                            </tr>
                            </tbody>
                    </table>
                    </div>
                    
            </div>
        )
    }
}
export default Employee;