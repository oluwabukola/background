import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getResults, displayResult } from './store/actions/displayActions';
import { deleteResult } from './store/actions/deleteActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';



class Results extends React.Component{
    constructor(props) {
        super(props);
       
    }
   componentDidMount() {
        const data = this.props.id;
      
       this.props.getResults(data);
    }

    handleDelete = (id) => {
        console.log('deleting result', id);
    
        this.props.deleteResult(id).then(datum => {
            
            console.log('Success:', datum);
            toast.notify('Result successfully deleted!');
            
                // this.props.history.push('/employerInfo')
            })
            .catch((error) => {
                console.error('Error:', error);
                
            });
    }
    
    
    render() {
        const {results} = this.props;

       
        return (
                            <div className="rest">
                                <table>
                                    <thead>
                                        <tr>
                                           {/* <th>Id</th>*/}
                                            <th>University Name</th>
                                            <th>Grade</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                            results != null && results.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                    {/*<td>{employ.rowIndex}</td>*/}
                                        <td>{employ.university_name}</td>
                                        <td>{employ.grade}</td> 
                                        <td className="eyes"><Link to={`/resultInfo/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
                                        <td><i onClick={() => this.handleDelete(employ.id)} class="fas fa-trash-alt"></i></td>
                                     {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                </tr>   
                                )
                                 } 
                                        </tbody>
                </table>

                <div className="no-guarantor" style={{ display: results == null || results.length === 0 ? 'block' : 'none' }}>
                                <h6>Results not available... </h6>
                            </div>
                            </div>     
                    )
                }
            }
           
    const mapStateToProps = (state) => {
    console.log('results state', state.result.results);
    return {
        results: state.result.results,
        deleted: state.result.oneresult,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        // displayGuarantor: (guarantor) =>  dispatch(displayGuarantor(guarantor)),
        getResults: (results) => dispatch(getResults(results)),
        deleteResult: (result) => dispatch(deleteResult(result)),
        displayResult: (result) =>  dispatch(displayResult(result)),
     
        
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Results);