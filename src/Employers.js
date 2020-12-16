import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmployers, displayEmployer } from './store/actions/displayActions';
import { deleteEmployer } from './store/actions/deleteActions';
import Nav from './Nav';


class Employers extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
         const data = this.props.id;
        // const data = this.props.match.params.id;
        console.log('employee_id', data);
       this.props.getEmployers(data)
       
    }
    handleDelete = (id) => {
        console.log('deleting employer', id);
    
        this.props.deleteEmployer(id).then(datum => {
            
        console.log('Success:', datum)
        
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
    render() {
        const { employer } = this.props;
        console.log(employer);
        const data = this.props.id;
    
        return (

                            <div className="rest">
                                <table>
                                    <thead>
                                        <tr>
                                            {/*<th>Id</th>*/}
                                            <th>Company Name</th>
                                            <th>Email</th>
                                        <th>Phone Number</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                            employer != null && employer.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                       {/* <td>{employ.id}</td> */}
                                        <td>{employ.company_name}</td>
                                        <td>{employ.email}</td>
                                        <td>{employ.phone_number}</td> 
                                        <td className="eyes"><Link to={`/employerInfo/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
                                        <td><i onClick={() => this.handleDelete(employ.id)} class="fas fa-trash-alt"></i></td>
                                     {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                     </tr>
                                )
                                 } 
                                        </tbody>
                                    </table>
                                    <div className="no-guarantor" style={{ display: employer == null || employer.length === 0 ? 'block' : 'none' }}>
                                <h6> Previous employer not available... </h6>
                            </div>

                </div>
                            
                    )
                }
            }
           
    const mapStateToProps = (state) => {
    console.log('deleted employer', state.employer.oneemployer);
    return {
        employer: state.employer.employers,
        deleted: state.employer.oneemployer
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        deleteEmployer: (employer) => dispatch(deleteEmployer(employer)),
         displayEmployer: (employer) =>  dispatch(displayEmployer(employer)),
        getEmployers:(employers) => dispatch(getEmployers(employers))
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(Employers);