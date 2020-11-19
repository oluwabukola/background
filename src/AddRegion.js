import React from 'react';
import CreateEmployee from './CreateEmployee';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { createRegion } from './store/actions/employeeActions';

let letters = RegExp(/^[A-Za-z]+$/);

const formValid =({formErrors, ...rest} ) => {
    let valid = true;

    console.log('form error',formErrors);
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
       
    });
        return valid;
}
 
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`
class AddRegion extends React.Component{
    constructor(props) {
        super(props);
       this.state = {
           name: '',
           loading: false,
           formErrors: {
               name: '',
           }
            
        }
    }

    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push('/Regions');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (formValid(this.state)) {
        const data = {
            name: this.state.name,
        }
        this.setState({
            loading: true
        });
        
         this.props.createRegion(data).then(datum => {
            this.setState({
                loading: false
           });
             console.log('Success:', datum)
             this.props.history.push('/regions');
                
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    else {
        console.error('Form inValid');
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'name': formErrors.name = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, console.log(this.state));
        
    }
    
    render() {
    return (
        <div>
            {this.state.loading ?
                <div className="sweet-loading">
                    <CircleLoader css={loaderCss} size={100}
                        color={"#2b4f81"}
                        loading={true} />
                </div> :
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
                        <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                        <hr />
                        <form className="region-form">
                            <label>Region Name</label>
                            <input type="text" className="addname"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                                placeholder="Enter region name" required /><br />
                            <button type='button' className="region-submit" onClick={this.handleSubmit}>Submit</button>
                        
                        </form>
                    </div>
                </div>
            }
            </div>
                
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRegion: (region) => dispatch(createRegion(region))
        
    }
    
}
export default withRouter(connect(null, mapDispatchToProps)(AddRegion)) ;