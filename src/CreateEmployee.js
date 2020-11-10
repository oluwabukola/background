import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createEmployee} from './store/actions/employeeActions'



class CreateEmployee extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
      this.props.createEmployee();
    }
    
    render() {
        const { employee } = this.props;
    
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
                    <h1>Create Employee</h1>
                   <button type="button" className="add"><Link to="/EmployeeForm">Add Employee<i className="fas fa-plus"></i></Link></button>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>View</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee != null && employee.map((employ) =>
                                    <tr key={employ.id}>
                                        <td>{employ.id}</td>
                                        <td>{employ.first_name}</td>
                                        <td>{employ.last_name}</td>
                                        <td>{employ.email}</td>  
                                        <td><button type="button" className="view-btn">VIEW</button></td>
                                        <td><button type="button" className="view-btn">DELETE</button></td>
                                        <td><button type="button" className="view-btn"><Link to="/guarantorForm">Update</Link></button></td>
                                    </tr>
                                
                                )
                            }
                            </tbody>
                        </table>
                </div>
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
        createEmployee: (employee) => {
            dispatch(createEmployee(employee));
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);