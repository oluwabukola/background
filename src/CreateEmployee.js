import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createdEmployee, updatedEmployee } from './store/actions/employeeActions';
import { deleteEmployee } from './store/actions/deleteActions';
import { displayEmployee } from './store/actions/displayActions';
import Nav from './Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateEmployee extends React.Component{
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
      this.props.createdEmployee();
    }

    handlePageClick = () => {
        const { employee } = this.props;

        const token = localStorage.getItem('token');
      
            
            const response = fetch( employee.next_page_url, {
                method: 'GET',
            headers: {
                'Authorization':`Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                
            })
                .then(response => {
                  return  response.json();
                    
                })
                .then(data => {
                    console.log('this is the sisp', data);
                    console.log(employee.next_page_url);
                    this.props.updatedEmployee(data);
                   
                })
                .catch((error) => {
                    console.error('Error:', error);
                  });
        }     
    

    handleDelete = (id) => {
        console.log('deleting employee', id);
    
        this.props.deleteEmployee(id).then(datum => {
            const { deleted } = this.props;
            console.log('to be deleted', deleted);
            toast.notify('Employee successfully deleted!');
            
        console.log('Success:', datum)
        
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    render() {
        const { employee } = this.props;
        const employed =  employee.data;
        console.log('this is to be paginated', employee);
        const pageCount = Math.ceil(employee.total / employee.per_page)
            alert(employee.per_page)
        return (
            <div className="home-page">
            <Nav />
                <div className="rest">
                    <h1>Create Employee</h1>
                   <button type="button" className="add"><Link to="/EmployeeForm">Add Employee<i className="fas fa-plus"></i></Link></button>
                    <table>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>View</th>
                                <th >Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employed != null && employed.map((employ) =>
                                    <tr key={employ.id}>
                                    {/*<td>{employ[1]}</td> */}
                                    <td>{employ.first_name}</td>
                                    <td>{employ.last_name}</td>
                                     <td>{employ.email}</td>  
                                    <td className="eyes"><Link to={`/view/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
                                    <td className="eyes" ><i onClick={() => this.handleDelete(employ.id)} class="fas fa-trash-alt"></i></td>
                                    <td className="eyes"><Link to={`/update/${employ.id}`}><i class="fas fa-pen-square"></i></Link></td>
                                        {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                    </tr>
                                
                                )
                            }
                            </tbody>
                    </table>
                    <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
         onPageChange={this.handlePageClick}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'active'}

        />

                </div>
                </div>
        );
}
}

const mapStateToProps = (state) => {
    console.log('stated', state.employee.employee);
    return {
        employee: state.employee.employee,
        deleted: state.employee.display
        
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        createdEmployee: (employee) => dispatch(createdEmployee(employee)),
        deleteEmployee: (employee) => dispatch(deleteEmployee(employee)),
        displayEmployee: (employee) => dispatch(displayEmployee(employee)),
        updatedEmployee: (data) => dispatch(updatedEmployee(data)),
     
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);