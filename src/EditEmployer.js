import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { editEmployer } from './store/actions/displayActions';
import { displayEmployer } from './store/actions/displayActions';
import Nav from './Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';



let numbers = RegExp(/^[0-9]+$/);
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

class EditEmployer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employer:{},
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
    componentDidMount() {
        const params = this.props.match.params;

        console.log(params.id);
      
        this.props.getEmployer(params.id);
        this.setState({
            employer: this.props.employer
        })
        console.log('employer data', this.props.employer);
        
  
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log('employer error', this.state.formErrors)
        let errors = this.state.formErrors
        // console.log('errors', errors)
       
        if (formValid(this.state)) {

            const params = this.props.match.params;
            // console.log('sending...', params.id);
               const { employer } = this.state;
            
            const data = {
                id:params.id,
                company_name: employer.company_name,
                email: employer.email,
                address: employer.address,
                phone_number: employer.phone_number,
                position: employer.position,
                issue: employer.issue,
                reason_leaving: employer.reason_leaving,
            
            }
            this.setState({
                loading: true
            });
            
             this.props.editEmployer(data).then(datum => {
                this.setState({
                    loading: false
               });
                 console.log('Success:', datum)
                 .notify('Employer succetoastssfully edited!');
                  this.props.history.push(`/employers/${params.id}`)
                    
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
        let employer = this.state.employer

        switch (name) {
            case 'company_name': formErrors.company_name = value.length > 2 
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
        this.setState({ formErrors: formErrors });
        employer[name] = value
        this.setState({employer})
        console.log(this.state)
        
    }
    render() {

        const { formErrors } = this.state;
        const { employer } = this.state;
        console.log('edit', employer);
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="home-page">
                        <Nav/>
                        <div className="rest">
                            <div className="update-form">
                                <form className="guarantor-form">
                                    {/* <div className="guarantor-name"> */}
                                        {/* <div>
                                            <label>Employee Id</label><br />
                                            <input type="text"
                                                name="employee_id"
                                                 onChange={this.handleChange}
                                                 value={this.state.employee_id}
                                                className="addname"
                                                placeholder="Oluwabukola" /><br />
                                        </div> */}
                                        <div>
                                            <label>Company Name</label><br />
                                            <input type="text"
                                                name="company_name"
                                                 onChange={this.handleChange}
                                                value={employer.company_name}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                    {/* </div> */}
                                    <div className="guarantor-details">
                                        <div>
                                
                                            <label>Email</label><br />
                                            <input type="email"
                                                name="email"
                                                 onChange={this.handleChange}
                                                 value={employer.email}
                                                className="mails"
                                                placeholder="Oluwabukola" />
                                        </div>
                                
                                        <div>
                                            <label>Phone Number</label><br />
                                            <input type="text"
                                                name="phone_number"
                                                 onChange={this.handleChange}
                                                value={employer.phone_number}
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
                                             value={employer.address}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                        <div>
                                            <label>Position</label><br />
                                            <input type="text"
                                                name="position"
                                                onChange={this.handleChange}
                                                 value={employer.position}
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
                                                 value={employer.issue}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                
                                        <div>
                                            <label>Reason leaving</label><br />
                                            <input type="text"
                                                name="reason_leaving"
                                                 onChange={this.handleChange}
                                                 value={employer.reason_leaving}
                                                className="addname"
                                                placeholder="Oluwabukola" />
                                        </div>
                                    </div>
                                    <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                                </form>
                            </div>
                        </div>
                        </div>
                }
                </div>
        );
    }
         
}
const mapStateToProps = (state) => {
    console.log('employer form', state.employer.oneemployer);
    return {
        employer: state.employer.oneemployer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmployer: (employer) => dispatch(displayEmployer(employer)),
        editEmployer: (employer) => dispatch(editEmployer(employer))
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEmployer));