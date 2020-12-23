import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import {Guarantors, displayCandidate} from '../store/actions/verificationAction';
import Modal from 'react-bootstrap/Modal';
import { verifyGuarantor } from '../store/actions/verificationAction';
import 'toasted-notes/src/styles.css';
import  '../index';

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class VerifyGuarantors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id: '',
            guarantor: null,
            Is_Verified:0,
        
        }
    }

    componentDidMount() {
        const data = this.props.id;
    
       this.props.Guarantors(data);
    }
    handleOpen = (employ) => {
    
        this.setState({
            show: true,
            guarantor: employ,
        });
    }
    handleClose = () => {
        this.setState({
            show: false
        });
    }

    
    handleVerification = async (event) => {
       
        event.preventDefault();
        const { guarantors } = this.props;
       // console.log('candidatesss', guarantors);

        const data = {
            id: this.state.guarantor.id,
            Is_Verified: this.state.Is_Verified
        }
        this.setState({
            loading: true
        });
              
        await this.props.verifyGuarantor(data);

        this.setState({
            loading: false,
    
        });
        this.handleClose();
                toast.notify('Guarantor successfully verified!');
            
    }

    handleUpdate = (event) => {

        this.setState({

            Is_Verified : event.target.checked  ? 1  : 0 
        })
    }
    
    
    render() {
        const { guarantors } = this.props;

        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
            <div className="rest">
           
    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
                    <Modal.Body>
                        <div className="vef">
                    <div className="check"> <input type="checkbox"  onChange={this.handleUpdate}/> </div>
            <h5><span>V</span>erify</h5>
             </div>
                    <div className="comment">
                        <textarea maxLength={50}  placeholder="comment.."/>
                    </div>
</Modal.Body>
                    <Modal.Footer>
                        <div className="verify-submission">
                        <button className="verify-submit"onClick={this.handleVerification} >Done</button>
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
                                    <td className="eyes"><Link to={`/guarantorDetails/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
                                    <td><button className="verify-now " onClick={() =>this.handleOpen(employ)}>Verify Now</button></td>
                                    <td><button className="verified" >Verified</button></td>
                                </tr>   
                            )}
                                        </tbody>
                </table>

               <div className="no-guarantor" style={{ display: guarantors == null || guarantors.length === 0 ? 'block' : 'none' }}>
                                <h6>Guarantor not available... </h6>
                        </div>
                        </div>
                }
                </div>    
                
                    )
                }
            }
           
            const mapStateToProps = (state) => {
                console.log('guarantors to be verified', state.verification.guarantors);
                return {
                    guarantors: state.verification.guarantors,
                    verifyGuarantor: state.verification.verifyGuarantor,
                    candidate: state.verification.candidate,
                    
                }
            }
            const mapDispatchToProps = (dispatch) => {
            
                return {
                    // UpdateGuarantors: (guarantors) => dispatch(UpdateGuarantors(guarantors)),
                    Guarantors: (guarantors) => dispatch(Guarantors(guarantors)),
                    verifyGuarantor: (guarantor) => dispatch(verifyGuarantor(guarantor)),
                    displayCandidate: (candidate) => dispatch(displayCandidate(candidate))

                    
                }
                
            }   
            
export default connect(mapStateToProps, mapDispatchToProps)(VerifyGuarantors);