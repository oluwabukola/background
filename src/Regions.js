import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayRegion } from './store/actions/employeeActions';

class Regions extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
      this.props.displayRegion();
      //console.log('display', this.props.displayRegion());
    }
    render() {
        const { regionName } = this.props;
        console.log('region', regionName);
        
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
                    </ul>
                </div>
                <div className="rest">
                    <h1>Regions</h1>
                
                        <div className="message"></div>
                    
                   <button type="button" className="add"><Link to="/addregion">Add Region</Link> </button>
                    <table>
                        <thead>
                            <tr>
                            <th>S/N</th>
                            <th>Region</th>
                            <th>Date Created</th>
                            <th>Edit</th>
                            <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             regionName != null && regionName.map((regionName) =>
                                <tr key={regionName.id}>
                                         <td>{regionName.id}</td>
                                         <td>{regionName.name}</td>
                                         <td>{regionName.created_at.split('T')[0]}</td>
                                         
                                    <td><button type="button" className="edit-btn">Edit</button></td>
                                    <td><button type="button" className="view-btn"><Link to="/employee">View</Link></button></td>
                                     </tr>
                                 )
                            }
                            </tbody>
                        </table>
                </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.regionName);
    return {
        regionName: state.region.regionName
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayRegion: (regionName) => {
            dispatch(displayRegion(regionName));
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Regions);
