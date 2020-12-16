import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRegion } from './store/actions/displayActions';
import { displayRegion } from './store/actions/employeeActions';


class RegionInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
         const data = this.props.match.params.id;
        // const data = this.props.id;
        console.log( 'region state', data);
        this.props.getRegion(data) 
    }
    
    render() {
        const { region } = this.props;
        // const { regionName } = this.props;
        console.log('region info', region);
        // const data = this.props.id;
        const data = this.props.match.params.id;
        console.log( 'region state', data);
     
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
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Region Name</h6></div>
                        <div className="created">{region.name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editRegion/${data}`}>Edit</Link></button>
                            <button type="button"> Verified</button>
                      </div>
                    </div>
                    </div>
                    </div>    
                </div>
                
        );
    }
}
const mapStateToProps = (state) => {
    console.log('one region', state);
    return {
        region: state.region.oneregion,
        // regionName: state.region.regionName
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRegion: (region) => dispatch(getRegion(region)),
        //  displayRegion: (regionName) => dispatch(displayRegion(regionName)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionInfo);