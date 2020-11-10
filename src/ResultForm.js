import React from 'react';
import { Link } from 'react-router-dom';

class ResultForm extends React.Component{
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
                            
                                    <label>Employee Id</label><br />
                                    <input type="text"
                                        name="employee_id"
                                        // onChange={this.handleChange}
                                        // value={this.state.firstName}
                                        className="addname"
                                        placeholder="Oluwabukola" /><br />
                        
                                    <label>University Name</label><br />
                                    <input type="text"
                                        name="university_name"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                            
                                    <label>Course</label><br />
                                    <input type="text"
                                        name="course"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                
                                
                                    <label>Grade</label><br />
                                    <input type="text"
                                        name="grade"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                            
                                    <label>Year of Graduation</label><br />
                                    <input type="text"
                                        name="year_of_graduation"
                                        // onChange={this.handleChange}
                                        // value={this.state.lastName}
                                        className="addname"
                                        placeholder="Oluwabukola" />
                                            <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
        
     
}
 export default ResultForm