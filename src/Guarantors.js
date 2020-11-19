import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGuarantors } from './store/actions/displayActions'


class Guarantors extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        const data = this.props.id;
        console.log('employee_id', data);
        // let employee_id = {
        //     employee_id:data
        // }

       this.props.getGuarantors(data)
       
    }
    
    render() {
        const { employee } = this.props;
        console.log(employee);
    
        return (
                            <div className="rest">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                        <th>Relationship</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                            employee != null && employee.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                        <td>{employ.id}</td>
                                        <td>{employ.first_name}</td>
                                        <td>{employ.last_name}</td>
                                        <td>{employ.relationship}</td> 
                                        <td className="eyes"><Link to={`/guarantorInfo/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
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
    console.log('prop reqion', state.employee.guarantors);
    return {
        employee: state.employee.guarantors,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        // displayGuarantor: (guarantor) =>  dispatch(displayGuarantor(guarantor)),
        getGuarantors:(guarantors) => dispatch(getGuarantors(guarantors))
        
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(Guarantors);