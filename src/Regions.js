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
                                <li> <Link to='/addregion'><button type="button">Add Region</button></Link></li>
                                </ul>
                                </div>
                        </li>
                        <li><Link to='/createEmployee'><i className="fas fa-compass regn"></i>Create Employee</Link> </li>
                        <li><i className="fas fa-sign-out-alt"></i>Signout</li>
                    </ul>
                </div>
                <div className="rest">
                    <h1>Regions</h1>
                    
                   <button type="button" className="add"><Link to="/addregion">Add Region<i class="fas fa-plus"></i></Link> </button>
                    <table>
                        <thead>
                            <tr>
                            <th>Region</th>
                            <th>Region</th>
                            <th>Date Created</th>
                            <th>Edit</th>
                            <th>View</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             regionName != null && regionName.map((regionName) =>
                                <tr key={regionName.id}>
                                         <td>{regionName.id}</td>
                                         <td>{regionName.name}</td>
                                         <td>{regionName.created_at.split('T')[0]}</td>
                                         
                                    <td className="eyes"><Link to={`/editRegion/${regionName.id}`}><i class="fas fa-trash-alt"></i></Link></td>
                                    <td className="eyes"><Link to="/employee"><i class="far fa-eye eye"></i></Link></td>
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
    console.log(state.region.regionName);
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
