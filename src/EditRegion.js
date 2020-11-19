import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';
import { editRegion } from './store/actions/employeeActions';
import { displayRegion } from './store/actions/employeeActions';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';


let letters = RegExp(/^[A-Za-z]+$/);
const formValid =({formErrors, ...rest} ) => {
    let valid = true;
    console.log(formErrors);
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

class EditRegion extends React.Component{
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

    componentDidMount() {
        const params = this.props.match.params;
        console.log(this.props);
      
        this.props.getRegions(params.id);
        this.setState({
        name: this.props.name
        })
        console.log(this.props.getRegions(params.id));
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let errors = this.state.formErrors
        console.log('errors', errors)
        if (formValid(this.state)) {
            const params = this.props.match.params;
            console.log('sending...', params.id);
            
            const data = {
            id: params.id,
            name: this.state.name,
            }
            this.setState({
                loading: true
            });

            this.props.editRegion(data).then(datum => {
                this.setState({
                    loading: false
               });
                console.log('Success:', datum)
               // this.props.history.push('/employeeInfo')
                    
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
            
         }
        else {
        console.error('Form inValid');
        }
      //this.props.history.push('/CreateEmployee');
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
        
        const { regionName } = this.props;
        console.log('edit', regionName);
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
                                defaultValue={regionName.name}
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

const mapStateToProps = (state) => {
    console.log('prop reqion', state.region.regionName);
    return {
        regionName: state.region.regionName,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
         getRegions: (regionName) => dispatch(displayRegion(regionName)),
        // getEmployee: (employee) => dispatch(displayEmployee(employee)),
        editRegion: (region) => dispatch(editRegion(region))
        
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditRegion));
