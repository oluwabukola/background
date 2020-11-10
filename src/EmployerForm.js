import React from 'react';
import { Link } from 'react-router-dom';

class EmployerForm extends React.Component{
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
                                        // onChange={this.handleChange}
                                        // value={this.state.firstName}
                                        className="addname"
                                        placeholder="Oluwabukola" /><br />
                                </div>
                                <div>
                                    <label>Company Name</label><br />
                                    <input type="text"
                                        name="company_name"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                            </div>
                            <div className="guarantor-details">
                            <div>
                                
                                <label>Email</label><br />
                                <input type="email"
                                    name="email"
                                    // onChange={this.handleChange}
                                    // value={this.state.lastName}
                                    className="mails"
                                    placeholder="Oluwabukola" />
                            </div>
                                
                                <div>
                                    <label>Phone Number</label><br />
                                    <input type="text"
                                        name="phone_number"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                            </div>
                            <div className="guarantor-details">
                            <div>
                                    <label>Address</label><br />
                                    <input type="text"
                                        name="address"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                                <div>
                                    <label>Position</label><br />
                                    <input type="text"
                                        name="position"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                            </div>
                            <div className="guarantor-details">
                                <div>
                                    <label>Issue</label><br />
                                    <input type="text"
                                        name="issue"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                                
                                <div>
                                    <label>Reason leaving</label><br />
                                    <input type="text"
                                        name="reason_leaving"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                </div>
                            </div>
                            <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
         
}
export default EmployerForm;