import React from 'react';
import CreateEmployee from './CreateEmployee';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createRegion} from './store/actions/employeeActions'
class AddRegion extends React.Component{
    constructor(props) {
        super(props);
       this.state = {
            name: ''
        }
    }
    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push('/Regions');
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.createRegion());
        console.log('state', this.state);
        console.log('region', this.props);
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({  [name]: value }, console.log(this.state));
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
                        <li><Link to='/createEmployee'><i className="fas fa-compass regn"></i>Create Employee</Link> </li>
                    </ul>
                </div>
            <div className="rest">
                    <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                   <hr />
                    <form className="region-form">
                 
                <label>Region Name</label>
                        <input type="text" className="addname"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder="Enter region name"required/><br/>
                   
                    <button type='button' className="form-submit" onClick={this.handleSubmit}>Submit</button>
                        
                    </form>
                    </div>
                    </div>
                
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createRegion: (region) => {
            dispatch(createRegion(region));
        }
    }
    
}
export default connect(null, mapDispatchToProps)(AddRegion) ;