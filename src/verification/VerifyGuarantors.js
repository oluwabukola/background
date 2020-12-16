import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import {Guarantors, displayCandidate} from '../store/actions/verificationAction';
import Modal from 'react-bootstrap/Modal';


class VerifyGuarantors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    componentDidMount() {
        const data = this.props.id;
       this.props.Guarantors(data);
    }
    handleOpen = () => {
    
        this.setState({
            show: true
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }

    
    render() {
        const { guarantors } = this.props;

        return (
            
            <div className="rest">
           
    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
                    <Modal.Body>
                        <div className="vef">
         <div className="check"> <input type="checkbox" /> </div>
            <h5><span>V</span>erify</h5>
             </div>
                    <div className="comment">
                        <textarea maxLength={50}  placeholder="comment.."/>
                    </div>
</Modal.Body>
                    <Modal.Footer>
                        <div className="verify-submission">
                        <button className="verify-submit"onClick={this.handleClose} >Done</button>
                        </div>
      </Modal.Footer>
    </Modal>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                        <th>Relationship</th>
                                            <th>View</th>
                                        <th>Verify</th>
                                         <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                        {
                            guarantors != null && guarantors.map((employ) =>
                                <tr >
                                    <td>{employ.first_name }</td>
                                    <td>{ employ.last_name}</td>
                                    <td>{employ.relationship}</td>
                                    <td className="eyes"><i class="far fa-eye eye"></i></td>
                                    <td><button className="verify-now " onClick={this.handleOpen}>Verify Now</button></td>
                                    <td><button className="verified" >Verified</button></td>
                                    {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                </tr>   
                            )}
                                        </tbody>
                </table>

               {/*<div className="no-guarantor" style={{ display: guarantors == null || guarantors.length === 0 ? 'block' : 'none' }}>
                                <h6>Guarantor not available... </h6>
                            </div> */}
                </div>    
                
                    )
                }
            }
           
            const mapStateToProps = (state) => {
                console.log('guarantors to be verified', state.verification.guarantors);
                return {
                    guarantors: state.verification.guarantors,
                    
                    
                }
            }
            const mapDispatchToProps = (dispatch) => {
            
                return {
            
                    Guarantors: (guarantors) => dispatch(Guarantors(guarantors)),
                    

                    
                }
                
            }   
            
export default connect(mapStateToProps, mapDispatchToProps)(VerifyGuarantors);