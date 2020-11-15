import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';
import { displayRegion } from './store/actions/employeeActions';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import EmployeeInfo from './EmployeeInfo';
import { editEmployee } from './store/actions/displayActions';
import { displayEmployee } from './store/actions/displayActions';

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
    });
        return valid;
 }
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class Edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
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

    componentDidMount() {
        const params = this.props.match.params;

        console.log(params.id);
      
        this.props.getEmployee(params.id);
        this.setState({
            employee: this.props.employee
        })
        console.log('employee data', this.props.employee);
        this.props.getRegions();
        console.log('regions', this.props.regionName)
  
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('emplourrr', this.state.formErrors)
        let errors = this.state.formErrors
        console.log('errors', errors)
        if (formValid(this.state)) {
            const params = this.props.match.params;
            console.log('sending...', params.id);
               const { employee } = this.state;
            
            const data = {
            employee_id: params.id,
            first_name: employee.first_name,
            region_name: employee.region_name,
            last_name: employee.last_name,
            other_name:employee.other_name,
            email: employee.email,
            gender: employee.gender,
            address: employee.address,
            phone_number:employee.phone_number,
            date_of_birth: employee.date_of_birth,
            state: employee.state
            
            }
            this.setState({
                loading: true
            });

            this.props.editEmployee(data).then(datum => {
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
        let employee = this.state.employee

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
                case 'phone_number': formErrors.phone_number = numbers.test(value)  && value.length > 5
                ? "" : 'invalid phone number' ;
                break;
                case 'date_of_birth': formErrors.date_of_birth =  value.length > 1
                ? "" :  'invalid age' ;
                break;
                case 'region_name': formErrors.region_name =  value.length > 2
                ? "" :  'invalid region' ;
                break;
 
                
            default:
                break;
        }
        this.setState({ formErrors: formErrors });
        employee[name] = value
        this.setState({employee})
        console.log(this.state)
        
    }
    render() {
        const { formErrors } = this.state;
        const { employee } = this.state;
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
                            <button type="button" className="back-btn" onClick={this.handleSubmit}><i class="fas fa-arrow-left"></i>Back</button>
                            <hr />
                            <form className="create">
                                
                                <div className="naming">
                                    <div>
                                        <label>First Name</label><br />
                                        <input type="text"
                                            name="first_name"
                                            onChange={this.handleChange}
                                            defaultValue={employee.first_name}
                                            className="addname"
                                            placeholder="Oluwabukola" /><br />
                                        <span className="errorMessage">{formErrors.first_name}</span>
                                    </div>
                                    <div>
                                        <label>Last Name</label><br />
                                        <input type="text"
                                            name="last_name"
                                            onChange={this.handleChange}
                                            defaultValue={employee.last_name}
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
                                            defaultValue={employee.other_name}
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
                                            defaultValue={employee.email}
                                            className="mails"
                                            placeholder="bb@gmail.com" />
                                        <span className="errorMessage">{formErrors.email}</span>
                                    </div>
                                    <div className="radio">
                                        <label >Gender:</label>
                                        <div class="genderOption">
                                            <input type="radio" id="male" className="male" checked={employee.gender === 'male'}
                                                onChange={this.handleChange}
                                                name="gender" value="male"
                                        
                                            />
                                            <label for="male">Male</label><br />
                                            <input type="radio" id="female" name="gender" checked={employee.gender === 'f'}
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
                                    defaultValue={employee.address}
                                    className="addname"
                                    placeholder="Enter address" />
                                        <span className="errorMessage">{formErrors.address}</span>
                                    </div>
                                    <div>
                                <label>State</label>
                                <input type="text"
                                    name="state"
                                    onChange={this.handleChange}
                                    defaultValue={employee.state}
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
                                    defaultValue={employee.phone_number}
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
                                    defaultValue={employee.date_of_birth}
                                    placeholder="Enter age" />
                                        <span className="errorMessage">{formErrors.date_of_birth}</span>
                                    </div>
                                </div>
                                <div className="guarantor-name">
                                    <div>

                                <label>Region</label>
                                <select className="addname">
                                <option >{employee.region_name}</option>
                                {
                             regionName != null && regionName.map((regionName) =>
                             <option key={regionName.id}>{regionName.name }</option>
        
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
    console.log('prop reqion',state.region.regionName);
    return {
        employee: state.employee.display,
        regionName: state.region.regionName,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRegions: (regionName) => dispatch(displayRegion(regionName)),
        getEmployee: (employee) => dispatch(displayEmployee(employee)),
        editEmployee: (employee) => dispatch(editEmployee(employee))
        
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
