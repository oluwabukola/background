import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { editGuarantor } from './store/actions/displayActions';
import { displayGuarantor } from './store/actions/displayActions';



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

class EditGuarantor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            guarantor:{},
            loading: false,
            formErrors: {
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
        console.log('edit guarantor', this.state.formErrors)
        let errors = this.state.formErrors
        console.log('edit errors', errors)
           
        if (formValid(this.state)) {
            const params = this.props.match.params;
            console.log('sending...', params.id);
            const { guarantor } = this.state;

                const data = {
                id:params. id,
                first_name: guarantor.first_name,
                last_name: guarantor.last_name,
                email: guarantor.email,
                gender: guarantor.gender,
                address: guarantor.address,
                phone_number: guarantor.phone_number,
                relationship: guarantor.relationship,
                occupation: guarantor.occupation,
                business_name: guarantor.business_name,
                office_address: guarantor.office_address,
                business_email: guarantor.business_email,
                phone: guarantor.phone
            
            }
            this.setState({
                loading: true
            });
            
            this.props.editGuarantor(data).then(datum => {
                this.setState({
                    loading: false
               });
                 console.log('Success:', datum);     
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
        let guarantor = this.state.guarantor;

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
        this.setState({ formErrors: formErrors });
        guarantor[name] = value
        this.setState({guarantor})
        console.log(this.state)
        
    }
    render() {
        const { guarantor } = this.props;
        console.log(guarantor);
       
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                             <div className="update-form"> 
                                
                                <form className="guarantor-form">
                                    {/* <div className="guarantor-name">
                                    <div>
                                        <label>Employee Id</label><br />
                                        <input type="text"
                                            name="employee_id"
                                            onChange={this.handleChange}
                                            value={this.state.employee_id}
                                            className="addname"
                                            placeholder="employee Id" /><br />
                                </div>
                                </div> */}
                                    <div className="guarantor-name">
                                        <div>
                                            <label>First Name</label><br />
                                            <input type="text"
                                                name="first_name"
                                                onChange={this.handleChange}
                                                value={guarantor.first_name}
                                                className="addname"
                                                placeholder="Oluwabukola" /><br />
                                        </div>
                                        <div>
                                            <label>Last Name</label><br />
                                            <input type="text"
                                                name="last_name"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.last_name}
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
                                                defaultValue={guarantor.address}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                        <div>
                                            <label>Phone Number</label><br />
                                            <input type="text"
                                                name="phone_number"
                                                onChange={this.handleChange}
                                                value={guarantor.phone_number}
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
                                                value={guarantor.email}
                                                className="mails"
                                                placeholder="Oluwabukola" />
                                        </div>
                                        <div>
                                            <label>Relationship</label><br />
                                            <input type="text"
                                                name="relationship"
                                                onChange={this.handleChange}
                                                value={guarantor.relationship}
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
                                                value={guarantor.occupation}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                        <div>
                                            <label >Gender:</label>
                                            <div class="genderOption">
                                                <input type="radio" id="male" className="male"
                                                    onChange={this.handleChange}
                                                    name="gender" value="male" checked={guarantor.gender ==='male'}
                                                />
                                                <label for="male">Male</label><br />
                                                <input type="radio" id="female" name="gender"
                                            onChange={this.handleChange}
                                            value="female"
                                            checked={guarantor.gender === "female"} />
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
                                                value={guarantor.business_name}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                        <div>
                                            <label>Office Address</label><br />
                                            <input type="text"
                                                name="office_address"
                                                onChange={this.handleChange}
                                                value={guarantor.office_address}
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
                                                value={guarantor.business_email}
                                                className="mails"
                                                placeholder="Oluwabukola" />
                                        </div>
                                        <div>
                                            <label>Company Phone</label><br />
                                            <input type="text"
                                                name="phone"
                                                onChange={this.handleChange}
                                                value={guarantor.phone}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                            </div>
                            
                                    <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                                </form>
                            </div>
                }
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('edit guarantor', state.guarantor.oneguarantor);
    return {
        guarantor: state.guarantor.oneguarantor,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispalyGuarantor: (guarantor) => dispatch(displayGuarantor(guarantor)),
        editGuarantor: (guarantor) => dispatch(editGuarantor(guarantor))
        
    }
}

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditGuarantor));