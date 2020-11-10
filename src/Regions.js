import React from 'react';
import { Link } from 'react-router-dom';
class Regions extends React.Component{
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
                        <li><Link to='/createEmployee'><i className="fas fa-compass regn"></i>Create Employee</Link> </li>
                    </ul>
                </div>
                <div className="rest">
                    <h1>Regions</h1>
                    {/* <div className="search-container">
                            <input type="search" placeholder="search region"></input>
                            <div className="icon"><i class="fas fa-search"></i></div>
                        </div> */}
                        <div className="message"></div>
                    
                   <button type="button" className="add"><Link to="/addregion">Add Region</Link> </button>
                    <table>
                        <thead>
                            <tr>
                            <th>S/N</th>
                            <th>Region</th>
                            <th>Edit</th>
                            <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lagos</td>
                                <td><button type="button" className="edit-btn">Edit</button></td>
                                <td><button type="button" className="view-btn"><Link to="/employee">View</Link></button></td>
                            </tr>
                            </tbody>
                        </table>
                </div>
                </div>
        )
    }
}
export default Regions;