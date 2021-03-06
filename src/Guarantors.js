import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGuarantors, displayGuarantor } from './store/actions/displayActions';
import { deleteGuarantor } from './store/actions/deleteActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';



class Guarantors extends React.Component{
    constructor(props) {
        super(props);
       
    }
   componentDidMount() {
        const data = this.props.id;
       console.log('employee_id', this.props.getGuarantors(data));
       this.props.getGuarantors(data);
    }
    handleDelete = (id) => {
        console.log('deleting guarantor', id);
    
        this.props.deleteGuarantor(id).then(datum => {
            
            console.log('Success:', datum);
           
            
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
                
            });
    }
    
    render() {
        const {guarantors } = this.props;
        console.log(guarantors);
       
        return (
                            <div className="rest">
                                <table>
                                    <thead>
                                        <tr>
                                           {/* <th>Id</th>*/}
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                        <th>Relationship</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                            guarantors != null && guarantors.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                    {/*<td>{employ.rowIndex}</td>*/}
                                        <td>{employ.first_name}</td>
                                        <td>{employ.last_name}</td>
                                        <td>{employ.relationship}</td> 
                                        <td className="eyes"><Link to={`/guarantorInfo/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
                                        <td><i onClick={() => this.handleDelete(employ.id)}class="fas fa-trash-alt"></i></td>
                                     {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                </tr>   
                                )
                                 } 
                                        </tbody>
                </table>

                <div className="no-guarantor" style={{ display: guarantors == null || guarantors.length === 0 ? 'block' : 'none' }}>
                                <h6>Guarantor not available... </h6>
                            </div>
                            </div>     
                    )
                }
            }
           
    const mapStateToProps = (state) => {
    
    return {
        guarantors: state.guarantor.guarantors,
        deleted: state.guarantor.oneguarantor,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        // displayGuarantor: (guarantor) =>  dispatch(displayGuarantor(guarantor)),
        getGuarantors: (guarantors) => dispatch(getGuarantors(guarantors)),
        deleteGuarantor: (guarantor) => dispatch(deleteGuarantor(guarantor)),
        displayGuarantor: (guarantor) =>  dispatch(displayGuarantor(guarantor)),
        
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(Guarantors);