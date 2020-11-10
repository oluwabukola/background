import React from 'react'; 
import { Link } from 'react-router-dom';
import Home from './home';
import Regions from './Regions';
import AddRegion from './AddRegion';
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';

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
                date_of_birth: '',
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
            
        if (formValid(this.state)) {
            
            const data = {
            first_name: this.state.first_name,
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
                loading: true
            });
            
            const response = fetch('http://hotelanywhere.ng/background/api/employee', {
                method: 'POST',
                headers: {
                    'Authorization':`Bearer ${token}`,
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify(data),
                
            })
                .then(response => {
                  return  response.json();
                    
                })
                .then(datum => {
                    this.setState({
                        loading: false
                    })
                    console.log('Success:', datum)
                    this.props.history.push('/createEmployee')
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                  });
                  
    
         }
        else {
        console.error('Form inValid');
        }
       // this.props.history.push('/CreateEmployee');
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'first_name': formErrors.first_name = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
                case 'last_name': formErrors.last_ame = letters.test(value)  && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
                case 'other_name': formErrors.other_ame = letters.test(value)  && value.length > 2
                ? "" :  'minimum of 3 characters required' ;
                break;
            
                case 'email': formErrors.email= emailRegex.test(value)  && value.length > 0
                ?  "" : 'invalid email addreess';
                break;
                case 'gender': formErrors.gender = value.length > 2
                ? "" : 'select'  ;
                break;
                case 'address': formErrors.address =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'state': formErrors.state= letters.test(value)  && value.length > 2
                ? "" : 'invalid state'  ;
                break;
                case 'phone_number': formErrors.phone_number = numbers.test(value)  && value.length > 10 
                ? "" : 'invalid phone number' ;
                break;
                case 'date_of_birth': formErrors.date_of_birth =  value.length > 1
                ? "" :  'invalid age' ;
                break;
                
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, console.log(this.state));
        
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
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
                                <label>Address</label>
                                <input type="text"
                                    name="address"
                                    onChange={this.handleChange}
                                    value={this.state.address}
                                    className="addname"
                                    placeholder="Enter address" />
                                <span className="errorMessage">{formErrors.address}</span>
                                <label>State</label>
                                <input type="text"
                                    name="state"
                                    onChange={this.handleChange}
                                    value={this.state.state}
                                    className="addname"
                                    placeholder="Enter state" />
                                <span className="errorMessage">{formErrors.state}</span>
                               
                                <label>Phone Number</label>
                                <input type="text"
                                    name="phone_number"
                                    onChange={this.handleChange}
                                    value={this.state.phone_number}
                                    className="addname"
                                    placeholder="Enter phone number" />
                                <span className="errorMessage">{formErrors.phone_number}</span>
                            
                                <label>Age</label>
                                <input type="text"
                                    name="date_of_birth"
                                    className="addname"
                                    onChange={this.handleChange}
                                    value={this.state.date_of_birth}
                                    placeholder="Enter age" />
                                <span className="errorMessage">{formErrors.date_of_birth}</span>

                                <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                            </form>
                        </div>
                    </div>
                }
                </div>
        )
    }
}


export default EmployeeForm;
