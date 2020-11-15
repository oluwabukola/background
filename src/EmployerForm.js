import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { createEmployee } from './store/actions/employeeActions';
import {createEmployer} from './store/actions/employeeActions'


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

class EmployerForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            company_name: '',
            email: '',
            phone_number: '',
            address: '',
            position:'',
            issue: '',
            reason_leaving:'',
            loading: false,
            formErrors: {
            company_name: '',
            email: '',
            phone_number: '',
            address: '',
            position:'',
            issue: '',
            reason_leaving:'',
            }
        }
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
         console.log('props ', this.props);
       
        if (formValid(this.state)) {

             const id= this.props.id;
            
            const data = {
                employee_id: id,
                company_name: this.state.company_name,
                email: this.state.email,
                address: this.state.address,
                phone_number: this.state.phone_number,
                position: this.state.position,
                issue: this.state.issue,
                reason_leaving: this.state.reason_leaving,
            
            }
            this.setState({
                loading: true
            });
            
             this.props.createEmployer(data).then(datum => {
                this.setState({
                    loading: false
               });
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

    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'company_name': formErrors.company_name = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
                case 'email': formErrors.email= emailRegex.test(value)  && value.length > 0
                ?  "" : 'invalid email addreess';
                break;
                
                case 'address': formErrors.address =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                
                case 'phone_number': formErrors.phone_number = numbers.test(value)  && value.length > 10 
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
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                        <div className="rest">
                            <div className="update-form">
                                <form className="guarantor-form">
                                    <div className="guarantor-name">
                                        <div>
                                            <label>Employee Id</label><br />
                                            <input type="text"
                                                name="employee_id"
                                                 onChange={this.handleChange}
                                                 value={this.state.employee_id}
                                                className="addname"
                                                placeholder="Oluwabukola" /><br />
                                        </div>
                                        <div>
                                            <label>Company Name</label><br />
                                            <input type="text"
                                                name="company_name"
                                                 onChange={this.handleChange}
                                                value={this.state.company_name}
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
                                            <label>Address</label><br />
                                            <input type="text"
                                                name="address"
                                                onChange={this.handleChange}
                                             value={this.state.address}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                        <div>
                                            <label>Position</label><br />
                                            <input type="text"
                                                name="position"
                                                onChange={this.handleChange}
                                                 value={this.state.position}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                    </div>
                                    <div className="guarantor-details">
                                        <div>
                                            <label>Issue</label><br />
                                            <input type="text"
                                                name="issue"
                                                 onChange={this.handleChange}
                                                 value={this.state.issue}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                
                                        <div>
                                            <label>Reason leaving</label><br />
                                            <input type="text"
                                                name="reason_leaving"
                                                 onChange={this.handleChange}
                                                 value={this.state.reason_leaving}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                    </div>
                                    <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                                </form>
                            </div>
                        </div>
                    
                }
                </div>
        );
    }
         
}
const mapStateToProps = (state) => {
    return {
        employee: state.employee.employee
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createEmployer: (employer) => dispatch(createEmployer(employer))
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployerForm));