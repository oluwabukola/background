import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';
import { displayRegion, creatingEmployee } from './store/actions/employeeActions';
import Home from './home';
import Regions from './Regions';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import Nav from './Nav';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


const token = localStorage.getItem('token');
let numbers = RegExp(/^[0-9]+$/);
let letters = RegExp(/^[A-Za-z]+$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid =({formErrors, ...rest} ) => {
    let valid = true;
    console.log(formErrors);
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
        // val === null && (valid = false);
    });
        return valid;
 }
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`


class EmployeeForm extends React.Component{
    async componentDidMount() {
        await this.props.displayRegion();
        const { regionName } = this.props
        console.log('this state', regionName)
    }
    constructor(props) {
        super(props);
        this.state = {
            first_name:'',
            last_name: '',
            other_name: '',
            email: '',
            gender: '',
            address: '',
            state: '',
            region_name: '',
            region_id: '',
            phone_number: '',
            date_of_birth: '',
            loading: false,
            formErrors: {
                first_name:'',
                last_name: '',
                other_name: '',
                email: '',
                gender: '',
                address: '',
                state: '',
                phone_number: '',
                region_name: '',
                region_id: '',
                date_of_birth: '',
            }
        }
            }

    
    handleSubmit = (event) => {
        event.preventDefault();
            
        if (formValid(this.state)) {
            
            const data = {
            first_name: this.state.first_name,
             region_name: this.state.region_name,
            region_id: this.state.region_id,
            last_name: this.state.last_name,
            other_name:this.state.other_name,
            email: this.state.email,
            gender: this.state.gender,
            address: this.state.address,
            phone_number: this.state.phone_number,
            date_of_birth: this.state.date_of_birth,
            state: this.state.state
            
            }
            this.setState({
                loading: true,
            });
            this.props.creatingEmployee(data).then(datum => {
                this.setState({
                    loading: false,
                    first_name:'',
                     last_name: '',
                     other_name: '',
                     email: '',
                     gender: '',
                    address: '',
                    state: '',
                    phone_number: '',
                    region_name: '',
                    date_of_birth: '',
        
                });
                toast.notify('Employee successfully created!');
                this.props.history.push('/createEmployee');
                     
            })
                .catch((error) => {
                    console.error('Error:', error);
                });
                  
         }
        else {
        console.error('Form inValid');
            toast.notify('All fields must be filled!', {
                color: 'red',
            });
        }
    }
    handleRegion = (event) => {
        const { regionName } = this.props
       // alert(JSON.stringify(regionName));
       // event.preventDefault();
        const { name, value } = event.target;
        //alert(value);
        //this.setState({
         //   region_name:value,
           // region_id:value,
        //})
        //alert(event.target.value);
        const index = regionName.findIndex(x => x.id == event.target.value);
        alert(index);
        this.setState({
region_name:regionName[index].name,
            region_id: value,
        })
        
    }

    handleChange = (event) => {
        event.preventDefault();
       const { name, value } = event.target; 
        let formErrors = this.state.formErrors;
        

        switch (name) {
            case 'first_name': formErrors.first_name = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 letters required';
                break;
            
            case 'last_name': formErrors.last_ame = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            case 'other_name': formErrors.other_ame = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            
            case 'email': formErrors.email = emailRegex.test(value) && value.length > 0
                ? "" : 'invalid email addreess';
                break;
            case 'gender': formErrors.gender = value.length > 2
                ? "" : 'select';
                break;
            case 'address': formErrors.address = value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            case 'state': formErrors.state = letters.test(value) && value.length > 2
                ? "" : 'invalid state';
                break;
            case 'phone_number': formErrors.phone_number = numbers.test(value) && value.length > 10
                ? "" : 'invalid phone number';
                break;
            case 'date_of_birth': formErrors.date_of_birth = value.length > 1
                ? "" : 'invalid age';
                break;
           // case 'region_name': formErrors.region_name = value.length > 2
//? "" : 'region not available';
               // break;
 
                
            default:
                break;
        }
        this.setState({ formErrors, [name]: value },console.log(this.state));
        
    }
    render() {
        const { formErrors } = this.state;
        const { regionName } = this.props;
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="home-page">
                        <Nav />
                        <div className="rest">
                            <button type="button" className="back-btn" onClick={this.handleSubmit}><i class="fas fa-arrow-left"></i>Back</button>
                            <hr />
                            <form className="create">
                                
                                <div className="naming">
                                    <div>
                                        <label>First Name</label><br />
                                        <input type="text"
                                            name="first_name"
                                            onChange={this.handleChange}
                                            value={this.state.first_name}
                                            className="addname"
                                            placeholder="Oluwabukola" /><br />
                                        <span className="errorMessage">{formErrors.first_name}</span>
                                    </div>
                                    <div>
                                        <label>Last Name</label><br />
                                        <input type="text"
                                            name="last_name"
                                            onChange={this.handleChange}
                                            value={this.state.last_name}
                                            className="addname"
                                            placeholder="Oluwabukola" />
                                        <span className="errorMessage">{formErrors.last_name}</span>
                                    </div>
                                    <div>
                                        <label>Other Name</label><br />
                                        <input type="text"
                                            name="other_name"
                                            className="addname"
                                            onChange={this.handleChange}
                                            value={this.state.other_name}
                                            placeholder="Oluwabukola" />
                                        <span className="errorMessage">{formErrors.other_name}</span>
                                    </div>
                                </div>
                                <div className="mailgend">
                                    <div>
                                        <label>Email</label>
                                        <input type="email"
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                            className="mails"
                                            placeholder="bb@gmail.com" />
                                        <span className="errorMessage">{formErrors.email}</span>
                                    </div>
                                    <div className="radio">
                                        <label >Gender:</label>
                                        <div class="genderOption">
                                            <input type="radio" id="male" className="male"
                                                onChange={this.handleChange}
                                                name="gender" value="male"
                                        
                                            />
                                            <label for="male">Male</label><br />
                                            <input type="radio" id="female" name="gender"
                                                onChange={this.handleChange}
                                                value="female"
                                       
                                            />
                                            <label for="female">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="guarantor-name">
                                    <div>
                                <label>Address</label>
                                <input type="text"
                                    name="address"
                                    onChange={this.handleChange}
                                    value={this.state.address}
                                    className="addname"
                                    placeholder="Enter address" />
                                        <span className="errorMessage">{formErrors.address}</span>
                                    </div>
                                    <div>
                                <label>State</label>
                                <input type="text"
                                    name="state"
                                    onChange={this.handleChange}
                                    value={this.state.state}
                                    className="addname"
                                    placeholder="Enter state" />
                                    <span className="errorMessage">{formErrors.state}</span>
                                        </div>
                                        </div>
                                <div className="guarantor-name">
                                    <div>
                                <label>Phone Number</label>
                                <input type="text"
                                    name="phone_number"
                                    onChange={this.handleChange}
                                    value={this.state.phone_number}
                                    className="addname"
                                    placeholder="Enter phone number" />
                                        <span className="errorMessage">{formErrors.phone_number}</span>
                                    </div>
                                    <div>
                                <label>Date of Birth</label>
                                <input type="text"
                                    name="date_of_birth"
                                    className="addname"
                                    onChange={this.handleChange}
                                    value={this.state.date_of_birth}
                                    placeholder="Enter age" />
                                        <span className="errorMessage">{formErrors.date_of_birth}</span>
                                    </div>
                                </div>
                                <div className="guarantor-name">
                                    <div>

                                <label>Region</label>
                                <select className="addname" onChange={this.handleRegion}>
                                <option>--select region--</option>
                                {
                             regionName != null && regionName.map((regionName) =>
                             <option  value={regionName.id}>{regionName.name }</option>
        
                                 )
                                    }
                                        </select>
                                    </div>
                                    
                                    </div>
                 <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                            </form>
                        </div>
                        </div>
                }
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('region state', state.region.regionName);
    
    return {
        regionName: state.region.regionName
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayRegion: (regionName) => dispatch(displayRegion(regionName)),
        creatingEmployee: (employee) => dispatch(creatingEmployee(employee))
        }
    }
    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeForm));
