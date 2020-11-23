import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEmployers} from './store/actions/displayActions'


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
    
    render() {
        const { employer } = this.props;
        console.log(employer);
        const data = this.props.id;
    
        return (
                            <div className="rest">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
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
                                        <td>{employ.id}</td>
                                        <td>{employ.company_name}</td>
                                        <td>{employ.email}</td>
                                        <td>{employ.phone_number}</td> 
                                        <td className="eyes"><Link to={`/employerInfo/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
                                        <td><i class="fas fa-trash-alt"></i></td>
                                     {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                     </tr>
                                    
                                )
                                 } 
                                        </tbody>
                                    </table>
                            </div>
                            
                    )
                }
            }
           
    const mapStateToProps = (state) => {
    console.log('prop reqion', state.employer.employers);
    return {
        employer: state.employer.employers,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        // displayGuarantor: (guarantor) =>  dispatch(displayGuarantor(guarantor)),
        getEmployers:(employers) => dispatch(getEmployers(employers))
        
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(Employers);