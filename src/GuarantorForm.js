import React from 'react';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import {createEmployee} from './store/actions/employeeActions'
import {createGuarantor} from './store/actions/employeeActions'


let numbers = RegExp(/^[0-9]+$/);
let letters = RegExp(/^[A-Za-z]+$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
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

class GuarantorForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            address: '',
            phone_number: '',
            employee_id: '',
            relationship:'',
            occupation: '',
            business_name:'',
            office_address: '',
            business_email:'',
            phone:'',
            loading: false,
            formErrors: {
                employee_id: '',
                first_name:'',
                last_name: '',
                email: '',
                gender: '',
                address: '',
                phone_number: '',
                 relationship:'',
                 occupation: '',
                 business_name:'',
                office_address: '',
                 business_email:'',
                 phone:'',
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('props ', this.props);
        if (formValid(this.state)) {
            
            const data = {
                employee_id: this.state.employee_id,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                gender: this.state.gender,
                address: this.state.address,
                phone_number: this.state.phone_number,
                relationship: this.state.relationship,
                occupation: this.state.occupation,
                business_name: this.state.business_name,
                office_address: this.state.office_address,
                busiess_email: this.state.business_email,
                phone: this.state.phone
            
            }
            this.setState({
                loading: true
             });
             this.props.createGuarantor(data)
            // .then(datum => {
            //     this.setState({
            //         loading: false
            //    });
            //     console.log('Success:', datum)
            //     this.props.history.push('/createEmployee')
                    
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            // });
 
            //  this.setState({
            //      loading: false
            // });
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
            case 'first_name': formErrors.first_name = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
            case 'last_name': formErrors.last_ame = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
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
                
                case 'phone_number': formErrors.phone_number = numbers.test(value)  && value.length > 10 
                ? "" : 'invalid phone number' ;
                break;
                case 'phone': formErrors.phone= numbers.test(value)  && value.length > 10 
                ? "" : 'invalid phone number' ;
                break;
               
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, console.log(this.state));
        
    }
    render() {
        const { employee } = this.props;
        console.log(employee);
        
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
                    <div className="update-form">
                        <div className="heading">
                            <ul>
                            <li><Link> Basic Information</Link></li>
                               <li><Link to='/guarantorForm'>Guarantor Form</Link></li> 
                               <li><Link to='/employerForm'>Previous Employer</Link></li>
                               <li><Link to ='/resultForm'>Result</Link></li> 
                            </ul>
                        </div>
                        <form className="guarantor-form">
                        <div className="guarantor-name">
                                    <div>
                                        <label>Employee Id</label><br />
                                        <input type="text"
                                            name="employee_id"
                                            onChange={this.handleChange}
                                            value={this.state.employee_id}
                                            className="addname"
                                            placeholder="employee Id" /><br />
                                </div>
                                </div>
                        <div className="guarantor-name">
                                    <div>
                                        <label>First Name</label><br />
                                        <input type="text"
                                            name="first_name"
                                            onChange={this.handleChange}
                                            value={this.state.first_name}
                                            className="addname"
                                            placeholder="Oluwabukola" /><br />
                                    </div>
                                    <div>
                                        <label>Last Name</label><br />
                                        <input type="text"
                                            name="last_name"
                                            onChange={this.handleChange}
                                            value={this.state.last_name}
                                            className="addname"
                                            placeholder="Oluwabukola" />
                                </div>
                            </div>
                            <div className="guarantor-details">
                                <div>
                            <label>Address</label><br />
                                        <input type="text"
                                            name="address"
                                            onChange={this.handleChange}
                                            value={this.state.address}
                                            className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                                <div>
                            <label>Phone Number</label><br />
                                        <input type="text"
                                            name="phone_number"
                                            onChange={this.handleChange}
                                            value={this.state.phone_number}
                                            className="addname"
                                        placeholder="Oluwabukola" />
                                    </div>
                            </div>
                            <div className="guarantor-details">

                                <div>
                                
                            <label>Email</label><br />
                                        <input type="email"
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                            className="mails"
                                        placeholder="Oluwabukola" />
                                </div>
                                <div>
                            <label>Relationship</label><br />
                                        <input type="text"
                                            name="relationship"
                                            onChange={this.handleChange}
                                            value={this.state.relationship}
                                            className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                            </div>
                            <div className="guarantor-details">
                                <div>
                            <label>Ocupation</label><br />
                                        <input type="text"
                                            name="occupation"
                                            onChange={this.handleChange}
                                            value={this.state.occupation}
                                            className="addname"
                                        placeholder="Oluwabukola" />
                                    </div>
                                <div>
                             <label >Gender:</label>
                                        <div class="genderOption">
                                            <input type="radio" id="male" className="male"
                                                onChange={this.handleChange}
                                    name="gender" value="male"
                                />
                                            <label for="male">Male</label><br />
                                            <input type="radio" id="female" name="gender"
                                                 onChange={this.handleChange}
                                                value="female" />
                                        <label for="female">Female</label>
                                        </div>
                                </div>
                                </div>
                            <div className="guarantor-details">
                                <div>
                            <label>Company Name</label><br />
                                        <input type="text"
                                            name="business_name"
                                            onChange={this.handleChange}
                                         value={this.state.business_name}
                                            className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                                <div>
                            <label>Office Address</label><br />
                                        <input type="text"
                                            name="office_address"
                                             onChange={this.handleChange}
                                            value={this.state.office_address}
                                            className="addname"
                                        placeholder="Oluwabukola" />
                                    </div>
                            </div>
                            <div className="guarantor-details">
                                <div>
                            <label>Company Email</label><br />
                                        <input type="email"
                                            name="business_email"
                                             onChange={this.handleChange}
                                             value={this.state.business_email}
                                            className="mails"
                                        placeholder="Oluwabukola" />
                                </div>
                                <div>
                            <label>Company Phone</label><br />
                                        <input type="text"
                                            name="phone"
                                             onChange={this.handleChange}
                                             value={this.state.phone}
                                            className="addname"
                                    placeholder="Oluwabukola" />
                                </div>
                            </div> 
                            <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                        </form>
                    </div>
                </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        employee: state.employee.employee
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createGuarantor: (guarantor) => {
            dispatch(createGuarantor(guarantor));
        }
    }
}

    export default connect(mapStateToProps, mapDispatchToProps)(GuarantorForm);